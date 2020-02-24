import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDate, deleteSelectedDate } from '../../actions';
import '../../assets/styles/components/Principal.scss';
import { submitSelectedDate } from '../../actions';
import moment from 'moment';

import PaypalCheckoutButton from '../Coaching/PaypalCheckoutButton';

const Agenda = props => {

    const [form, setValues] = useState({
        user_id: checkCookie(),
        schedule: '',
        coach: 'Guido',
        type: 'SOLO',//Debe escogerse en la solapa antes del calendario
        premium: 'NORMAL',
        price: null || parseInt(totalPrice()),
        dates: [],
        check: false || checkStateCurrency()
    });

    const order = {
        customer: form.user_id,
        total: form.price,
        test: 'test'
      };
    
    console.info("valor de price:",form.price)

    useEffect(() => {
        document.title = form.price
        form.price = totalPrice()
        form.schedule = showFormatDate()
        form.dates = props.dates
    })
    console.info('dentro de agenda',props.dates)

    function showFormatDate(dateTime){
        return dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
    }

    function getCookie(cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var cookie = ca[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }

    function checkStateCurrency(){} // recibe el estado de la transaccion

    function checkCookie() {
        var user = getCookie("id");
        if (user != "") {
            return user
        }
    }
    
    // console.log('Estado de price: ' + form.price)
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
        // console.log(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.selectDate(form)
        props.submitSelectedDate(form, '/');
    };
    
    function totalPrice() {
        if (!isNaN(props.currentDay)) {
            return props.currentDay 
        }
    }

    function allDateInArray(){
        //Se debe agrupar todos los datos en un array o en un objeto
        return
    }

    localStorage.setItem('prueba',JSON.stringify(totalPrice()))


    return (
        <section className=""> 
            <form onSubmit={handleSubmit}>
               
                <p name="schedule" onChange={handleInput} value={form.schedule}>{form.schedule}</p>

                <select name="type" onChange={handleInput}>
                    <option value="SOLO">SOLO</option>
                    <option value="COACHING">COACHING</option>
                </select>

                <select name="coach" onChange={handleInput}>
                    <option value="Guido">Guido</option>
                    <option value="Murdoc">Murdoc</option>
                </select>

                <select name="premium" onChange={handleInput}>
                    <option value="NORMAL">NORMAL</option>
                    <option value="PREMIUM">PREMIUM</option>
                </select>

                <p name="price" onChange={handleInput} value={totalPrice()}>{totalPrice()}</p>

                <p name="dates" onChange={handleInput} value={props.dates}>{form.dates}</p>

                {/* <button type="submit">pagar</button> */}

                <PaypalCheckoutButton order={order} form={form} handleSubmit={handleSubmit}/>
            </form>
        </section>
    )
}



const mapDispatchToProps = {
    selectDate,
    deleteSelectedDate,
    submitSelectedDate
};

export default connect(null, mapDispatchToProps)(Agenda);