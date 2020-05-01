import React,{useState,useEffect} from 'react';
import { selectDate, deleteSelectedDate, submitSelectedDate } from '../../actions';
import { connect } from 'react-redux';
import PaypalCheckoutButton from '../../components/Coaching/PaypalCheckoutButton';
import moment from 'moment';

import '../../assets/styles/components/Promotion.scss';
import '../../assets/styles/components/Schedule/Agenda.scss';

import EmblemIron from '../../assets/static/images/promotion/Emblem_Iron.png';

const Irons = (props) =>{

    const [form, setValues] = useState({
        user_id: checkCookie(),
        schedule: showFormatDate(),
        coach: 'Guido',
        type: 'SOLO',//Debe escogerse en la solapa antes del calendario
        premium: 'IRONS',
        price: 2 ,
        dates: ["2020-03-9","2020-03-25"],
        check: false,
        classes: 2,
        status: 'En Curso'
    });

    useEffect(() => {
        form.price = price.total
    })

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

    function checkCookie() {
        var user = getCookie("id");
        if (user != "") {
            return user
        }
    }

    function showFormatDate(dateTime) {
        return dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.selectDate(form)
        props.submitSelectedDate(form, '/');
    };


    console.log(form.schedule)

    const price = {
        total:48
    }
    
    const priceARS = 100

    const saveMoney = 10

    const numClasses = 15

    return(

    <section id="promotion__irons" className="promotion__irons">

        <div className="promotion__left">
            <h1 className="promotion__title">COACHING NOVATO</h1>
            <figure><img className="promotion__iron__emblem" src={EmblemIron} alt="Logo de Iron"/></figure>
        <div className="promotion__discount__box">
            <strong className="promotion__discount">SAVE {saveMoney}%</strong>
        </div>
        <p className="promotion__classes">CANTIDAD DE CLASES: {numClasses}</p>
        </div>
        <hr className="promotion__vertical__line"/>

        <div className="promotion__right">

            <div className="promotion__description">
                <ol className="promotion__description__list">
                    <li>Horarios flexibles que se adapten a tus necesidades</li>
                    <li>Tendrás un PDF con el plan de estudio</li>
                    <li>La entrevista es completamente gratuita (no cuenta como una sesión)</li>
                    <li>Entras en nuestro programa de fidelización</li>
                </ol>
            </div>
            
            <div className="promotion__side">
                <h2 className="agenda__price__title">Precio</h2>
                <p className="agenda__time">Antes : ${Math.floor((price.total * (saveMoney * 0.1)) + 4)}</p>
                <h1 className="agenda__dollar__price">${price.total}</h1>
                <h3 className="agenda__pesos__price">(AR$ {price.total * priceARS})</h3>
            </div>

            <div className="promotion__buttom">
                <PaypalCheckoutButton order={price} form={form} handleSubmit={handleSubmit}/>
            </div>

        </div>
    </section>
)}

const mapDispatchToProps = {
    selectDate,
    deleteSelectedDate,
    submitSelectedDate
};

export default connect(null, mapDispatchToProps)(Irons);