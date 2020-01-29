import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDate, deleteSelectedDate } from '../../actions';
import '../../assets/styles/components/Principal.scss';
import { submitSelectedDate } from '../../actions';

const Agenda = props => {

    const [form, setValues] = useState({
        user_id: checkCookie(),
        schedule: '',
        coach: 'Guido',
        type: '',
        premium: false,
        price: null || totalPrice(),
    });

    console.log('la fecha de hoy es :', props)

    useEffect(() => {
        document.title = form.price
        form.price = totalPrice()
        form.schedule = props.selectedDayFormated

    })

    function getCookie(cname) {
        var name = cname + "=";
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

    function checkCookie() {
        var user = getCookie("id");
        if (user != "") {
            return user
        }
    }


    console.log('Estado de price: ' + form.price)
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
            price: totalPrice()
        });
        // console.log(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitSelectedDate(form, '/login');
    };

    function totalPrice() {
        if (!isNaN(props.currentDay)) {
            return props.currentDay + 1
        }
    }


    return (
        <section className="">
            <form onSubmit={handleSubmit}>
                {/* <input required onChange={handleInput} className="input" type="text" name="user_id" placeholder="user_id" /> */}

                {/* <input required onChange={handleInput} className="input" type="text" name="schedule" placeholder="schedule"value={props.currentDay}/> */}
                {/* <input required onChange={handleInput} className="input" type="text" name="schedule" placeholder="schedule" /> */}
                <p name="schedule" onChange={handleInput} value={form.schedule}>{form.schedule}</p>

                {/* <input required onChange={handleInput} className="input" type="text" name="coach" placeholder="coach" value={form.coach} /> */}
                <select name="coach" onChange={handleInput}>
                    <option value="Guido">Guido</option>
                    <option value="Murdoc">Murdoc</option>
                </select>

                <input required onChange={handleInput} className="input" type="text" name="type" placeholder="type" />

                <input required onChange={handleInput} className="input" type="text" name="premium" placeholder="premium" />

                <p name="price" onChange={handleInput} value={form.price}>{form.price}</p>

                <button className="btn__secondary" type="submit">Pagar!</button>
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