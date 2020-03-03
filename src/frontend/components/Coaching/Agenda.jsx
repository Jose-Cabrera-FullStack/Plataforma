import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDate, deleteSelectedDate } from '../../actions';
import { submitSelectedDate } from '../../actions';
import PaypalCheckoutButton from '../Coaching/PaypalCheckoutButton';
import moment from 'moment';
import information from '../../assets/static/images/info.svg'

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
        price: 3 || parseInt(totalPrice()),
        dates: [],
        check: false || checkStateCurrency(),
        classes: 2,
        status: 'En Curso'
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
        let total = 3
        if (!isNaN(props.currentDay)) {
            return total * form.dates.length
        }
    }

    function totalPriceAR() {
        return totalPrice() * dollarAR
    }

    function allDateInArray() {
        //Se debe agrupar todos los datos en un array o en un objeto
        return
    }

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

                    <div className="agenda__info">
                        <p className="select__title">¿Qué tipo de Coach quieres recibir?</p> <img src={information} alt="information" />
                    </div>

                    <select name="type" onChange={handleInput} className="select__agenda">
                        <option value="SOLO">SOLO</option>
                        <option value="COACHING">COACHING</option>
                    </select>

                    <hr className="register__input__line register__input__line--agenda" />
                    <br />

                    <div className="agenda__info">
                        <p className="select__title">¿Quién será tu coach?</p> <img src={information} alt="information" />
                        <strong className="pop__service pop__service--special__1">
                            Elige al coach que te guiara en este <br/>
                            interesante viaje
                         </strong>

                    </div>

                    <select name="coach" onChange={handleInput} className="select__agenda">
                        <option value="Guido">Guido</option>
                        <option value="Murdoc">Murdoc</option>
                    </select>
                    <hr className="register__input__line register__input__line--agenda" />

                    <br />
                    <div className="agenda__info">
                        <p className="select__title">¿Cuántas clases quieres?</p> <img src={information} alt="information" />
                        <strong className="pop__service pop__service--special__1">
                        Selecciona el número de sesiones <br/>
                        que desea tener. Cada sesión dura <br/>
                        Una Hora y Media ( 90 Minutos)
                         </strong>

                    </div>

                    <select name="classes" onChange={handleInput} className="select__agenda">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <hr className="register__input__line register__input__line--agenda" />

                    <br />
                    <div className="agenda__info">
                        <p className="select__title">¿Qué tipo de clases quieres ver?</p> <img src={information} alt="information" />
                    </div>

                    <select name="premium" onChange={handleInput} className="select__agenda">
                        <option value="NORMAL">NORMAL</option>
                        <option value="PREMIUM">PREMIUM</option>
                    </select>

                    <hr className="register__input__line register__input__line--agenda" />

                </div>


                <div className="agenda__paypal">
                    <PaypalCheckoutButton order={order} form={form} handleSubmit={handleSubmit} />
                </div>

            </form>
                    <ul className="agenda__bullet__list">
                        <li>Horarios flexibles que se adapten a tus necesidades</li>
                        <li>Tendrás un PDF con el plan de estudio</li>
                        <li>La entrevista es completamente gratuita (no cuenta como una sesión)</li>
                        <li>Entras en nuestro programa de fidelización</li>
                    </ul>
        </section>
    )
}



const mapDispatchToProps = {
    selectDate,
    deleteSelectedDate,
    submitSelectedDate
};

export default connect(null, mapDispatchToProps)(Agenda);