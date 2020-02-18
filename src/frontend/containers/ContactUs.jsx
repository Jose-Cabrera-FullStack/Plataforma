import React, { useState } from 'react';

import '../assets/styles/components/ContactUs.scss';

const ContactUs = () => {
    return(
        <section class="contact">
        <div>
            <h1 class="contact__principal__title">Contactanos</h1>
            <h4 class="contact__principal__subtitle">Si tienes alguna duda, contactanos para poder resolverla. Tu
                eres nuestra mayor prioridad.</h4>

            <form action="" class="contact__form">
                <div class="contact__form__internal">

                    <select name="contact__type" id="contact__type">
                        <option value="Trabajo">Trabajar con nosotros</option>
                        <option value="Error">Reporte de Error</option>
                        <option value="Coaching">Dudas sobre Coaching</option>
                        <option value="Queja">Sugerencia o Queja</option>
                    </select>
                    
                    <input type="text" placeholder="Ingrese su nombre" class="contact__input"/> <br/>
                    
                    <input type="email" placeholder="Ingrese su email" class="contact__input"/>
                    
                    <textarea name="mensaje " placeholder="¿Qué te gustaría decirnos?" id="mensaje" cols="30" rows="10" class="contact__input contact__input--height" ></textarea> <br/>
                    
                    <button class="btn__secondary btn__secondary--fix" type="submit">Envialo papu</button>
                </div>

            </form>

            <div class="contact__socials">

                <a href="http://facebook.com">
                    <div class="contact__social">
                        <figure><img src="" alt=""/></figure>
                        <h5 class="contact__socials__subtitle">Discord</h5>
                        <h4 class="contact__socials__title">Summoner's Cave</h4>
                    </div>
                </a>
                <a href="http://facebook.com">
                    <div class="contact__social">
                        <figure><img src="" alt=""/></figure>
                        <h5 class="contact__socials__subtitle">Discord</h5>
                        <h4 class="contact__socials__title">Summoner's Cave</h4>
                    </div>
                </a>
                <a href="http://facebook.com">
                    <div class="contact__social">
                        <figure><img src="" alt=""/></figure>
                        <h5 class="contact__socials__subtitle">Discord</h5>
                        <h4 class="contact__socials__title">Summoner's Cave</h4>
                    </div>
                </a>
                <a href="http://facebook.com">
                    <div class="contact__social">
                        <figure><img src="" alt=""/></figure>
                        <h5 class="contact__socials__subtitle">Discord</h5>
                        <h4 class="contact__socials__title">Summoner's Cave</h4>
                    </div>
                </a>

            </div>
        </div>
    </section>
    )
}

export default ContactUs;