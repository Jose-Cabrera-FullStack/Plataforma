import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDate, deleteSelectedDate } from '../../actions';
import { submitSelectedDate } from '../../actions';
import PaypalCheckoutButton from '../Coaching/PaypalCheckoutButton';
import moment from 'moment';

import '../../assets/styles/components/Principal.scss';
import '../../assets/styles/components/Schedule/Agenda.scss';

const dollarAR = 82;

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

    console.info("valor de price:", form.price)

    useEffect(() => {
        document.title = form.price
        form.price = totalPrice()
        form.schedule = showFormatDate()
        form.dates = props.dates
    })
    console.info('dentro de agenda', props.dates)

    function showFormatDate(dateTime) {
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

    function checkStateCurrency() { } // recibe el estado de la transaccion

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

    function totalPriceAR() {
        return totalPrice() * dollarAR
    }

    function allDateInArray() {
        //Se debe agrupar todos los datos en un array o en un objeto
        return
    }

    localStorage.setItem('prueba', JSON.stringify(totalPrice()))


    return (
        <section className="agenda">
            <form onSubmit={handleSubmit}>
                <div className="agenda__price">
                    <h2 className="agenda__price__title">Precio</h2>
                    <h1 className="agenda__dollar__price" name="price" onChange={handleInput} value={totalPrice()}>${totalPrice()}</h1>
                    <h3 className="agenda__pesos__price">(AR$ {totalPriceAR()})</h3>
                    <p className="agenda__time">Finaliza en : 9 -14 Dias</p>

                </div>

                <div className="agenda__selection">

                    <span className="span__invisible" name="schedule" onChange={handleInput} value={form.schedule}>{form.schedule}</span>

                    <p className="select__title">¿Qué tipo de Coach quieres recibir?</p>

                    <select name="type" onChange={handleInput} className="select__agenda">
                        <option value="SOLO">SOLO</option>
                        <option value="COACHING">COACHING</option>
                    </select>

                    <br />

                    <p className="select__title">¿Quién será tu coach?</p>

                    <select name="coach" onChange={handleInput} className="select__agenda">
                        <option value="Guido">Guido</option>
                        <option value="Murdoc">Murdoc</option>
                    </select>

                    <br />

                    <p className="select__title">¿Cuántas clases quieres?</p>

                    <select name="number" onChange={handleInput} className="select__agenda">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>

                    <br />
                    <p className="select__title">¿Cuántas clases quieres?</p>

                    <select name="premium" onChange={handleInput} className="select__agenda">
                        <option value="NORMAL">NORMAL</option>
                        <option value="PREMIUM">PREMIUM</option>
                    </select>



                    <p name="dates" onChange={handleInput} value={props.dates}>{form.dates}</p>

                    {/* <button type="submit">pagar</button> */}

                </div>

                <div className="agenda__paypal">
                    <PaypalCheckoutButton order={order} form={form} handleSubmit={handleSubmit} />
                </div>

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