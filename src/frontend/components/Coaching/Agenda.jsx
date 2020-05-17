import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDate, deleteSelectedDate,submitSelectedDate } from '../../actions';
import PaypalCheckoutButton from '../Coaching/PaypalCheckoutButton';
import moment from 'moment';
import information from '../../assets/static/images/info.svg'

import '../../assets/styles/components/Principal.scss';
import '../../assets/styles/components/Schedule/Agenda.scss';

const dollarAR = 100;

const Agenda = (props) => {

    const [form, setValues] = useState({
        user_id: checkCookie(),
        schedule: '',
        coach: 'Guido',
        type: 'SOLO',//Debe escogerse en la solapa antes del calendario
        premium: 'NORMAL',
        price: 2 ,
        dates: [],
        check: false || checkStateCurrency(),
        classes: 2,
        status: 'En Curso'
    });

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);

    const order = {
        customer: form.user_id,
        total: form.price,
        test: 'test'
    };

    // console.info("valor de price:", form.price)--> adaptar con las especificaciones escogidas

    useEffect(() => {
        form.price = totalPrice() + 2
        form.schedule = showFormatDate()
        form.dates = props.dates
    })

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
        let total = 2

        if(form.type==="SOLO"){
            total = total * 0.5
        }else{
            total = total * 0.7
        }
        
        total =total * form.classes
        
        if(form.premium==="PREMIUM"){
            total = total * 1.28 
        }

        if (!isNaN(props.currentDay)) {
            return Math.floor(total * form.dates.length)
        }
    }

    function totalPriceAR() {
        return totalPrice() * dollarAR
    }

    let lastItemProps = props.myClass.length
    // console.log(props.dates.length)

    return (
        <section className="agenda">
            {(props.dates.length < 2) ?
                (<p className="agenda__warning agenda__warning--fix">Debes escoger al menos dos fechas</p>):('')
            }
            <form onSubmit={handleSubmit}>
                <div className="agenda__price">
                    <h2 className="agenda__price__title">Precio</h2>
                    <p className="agenda__time">Antes : ${Math.floor((totalPrice() * 1.9) + 4)}</p>
                    <h1 className="agenda__dollar__price" name="price" onChange={handleInput} value={totalPrice()+2}>${totalPrice()+2}</h1>
                    <h3 className="agenda__pesos__price">(AR$ {totalPriceAR() + (dollarAR*2)})</h3>
                </div>

                <div className="agenda__selection">

                    <span className="span__invisible" name="schedule" onChange={handleInput} value={form.schedule}>{form.schedule}</span>

                    <div className="agenda__info">
                        <p className="select__title">¿Qué tipo de Coach quieres recibir?</p> <img src={information} alt="information" onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}/>
                        {isShown1 ? <strong className="pop__service pop__service--special__1 pop__service__width">
                            SOLOQ para entender las mecanicas de jugar por tu propia cuenta <br/>
                            CLASH para aprender a trabajar en sinergia con tu equipo <br/>
                            COACHING para convertirte el guia de los futuros Pro Players 
                         </strong> : ""}
                    </div>

                    <select name="type" onChange={handleInput} className="select__agenda select__agenda--fix">
                        <option value="SOLO">SOLO</option>
                        <option value="COACHING">COACHING</option>
                    </select>

                    <hr className="register__input__line register__input__line--agenda" />
                    <br />

                    <div className="agenda__info">
                        <p className="select__title">¿Quién será tu coach?</p> <img src={information} alt="information" onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)} />
                        {isShown2 ? <strong className="pop__service pop__service--special__1">
                            Elige al coach que te guiara en este <br />
                            interesante viaje
                         </strong> : ""}
                    </div>

                    <select name="coach" onChange={handleInput} className="select__agenda select__agenda--fix">
                        <option value="Guido">Guido</option>
                        <option value="Murdoc">Murdoc</option>
                    </select>
                    <hr className="register__input__line register__input__line--agenda" />

                    <br />
                    <div className="agenda__info">
                        <p className="select__title">¿Cuántas clases quieres?</p> <img src={information} alt="information" onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}/>
                        {isShown3 ? <strong className="pop__service pop__service--special__1">
                        Selecciona el número de sesiones <br />
                        que desea tener. Cada sesión dura <br />
                        Una Hora y Media ( 90 Minutos)
                    </strong> : ""}
                        
                    </div>

                    <select name="classes" onChange={handleInput} className="select__agenda select__agenda--fix">
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
                        <p className="select__title">¿Qué tipo de clases quieres ver?</p> <img src={information} alt="information" onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}/>
                        {isShown4 ? <strong className="pop__service pop__service--special__1">
                        Accede a nuestros cursos Premiun  <br />
                        en cualquier momento <br />
                        tambien obten las guias avanzadas <br/>
                        de MicroGame y MacroGame
                    </strong> : ""}
                    </div>

                    <select name="premium" onChange={handleInput} className="select__agenda select__agenda--fix">
                        <option value="NORMAL">NORMAL</option>
                        <option value="PREMIUM">PREMIUM</option>
                    </select>

                    <hr className="register__input__line register__input__line--agenda" />

                </div>

                {/* {
                    (props.myClass[lastItemProps - 1].status === 'En Curso' ) ?
                        (<p className="agenda__warning">¡HASTA QUE NO TERMINES TU ORDEN, NO PODRAS ADQUIRIR UN NUEVO CURSO!</p>) :
                        (props.dates.length < 2 ?
                            '' : <div className="agenda__paypal">
                            <PaypalCheckoutButton order={order} form={form} handleSubmit={handleSubmit} />
                        </div>
                        )
                    } */}
                        {props.dates.length < 2 ?
                            "" : 
                            <div className="agenda__paypal">
                                <PaypalCheckoutButton order={order} form={form} handleSubmit={handleSubmit} />
                            </div>
                        }

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

const mapStateToProps = state => {
    return {

        myClass: state.myClass,

    }
}



const mapDispatchToProps = {
    selectDate,
    deleteSelectedDate,
    submitSelectedDate
};

export default connect(mapStateToProps, mapDispatchToProps)(Agenda);