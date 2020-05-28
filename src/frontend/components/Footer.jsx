import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendEmail } from '../actions';

import '../assets/styles/components/Footer.scss';
import Payment from '../assets/static/images/payment-icons-footer.png';
import Facebook from '../assets/static/images/social-network/facebook-white.svg';
import Reddit from '../assets/static/images/social-network/reddit-white.svg';
import Instagram from '../assets/static/images/social-network/instagram-white.svg';
import Discord from '../assets/static/images/social-network/discord-white.svg';


const Footer = (props) => {
    const [form, setValues] = useState({
        name:'SOLO INFORMACION',
        email : '',
        case: 'INFORMACION',
        message: 'SOLO INFORMACION'
    });

    const handleInput = (event) => {
        setValues({
        ...form,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.sendEmail(form, '/');
    };
    
    return (
        <footer id="footer" className="footer">
            <form className="footer__form" onSubmit={handleSubmit}>
                
                <input className="input" 
                type="email" 
                name="email" 
                placeholder="Ingresa su email aquí" 
                onChange={handleInput} 
                required/>

                <button className="btn__secondary footer__responsive" type="submit">OBTEN TU INFORMACIÓN</button>
            </form>

            <div className="container__footer">

                <div className="footer__social-network">

                    <ol className="list__footer responsive">
                        <li className="menu__footer">
                            <Link to="/coaching">
                                Coaching
                            </Link>
                        </li>
                        <li className="menu__footer">
                            <Link to="/faq">
                                FAQ
                            </Link>
                        </li>
                        <li className="menu__footer">
                            <Link to="/contactanos">
                                Contactanos
                            </Link>
                        </li>

                    </ol>

                </div>
                <figure>
                    <img className="payment__footer responsive" src={Payment} alt="" />
                </figure>

                <div className="footer__information">
                    <h2 className="footer__title">SUMMONER’S CAVE</h2>
                    <p className="parragraph__footer">
                    SUMMONER’S CAVE no está respaldada por Riot Games y no refleja la opinión
                    de Riot Games o cualquier persona oficialmente involucrada en la producción o
                    manejo de League of Legends. League of Legends y Riot Games son
                    marcas comerciales o marcas comerciales registradas de Riot Games, Inc. League of Legends ©
                    Riot Games, Inc.
                </p>

                <div>
                        <ol className="icons__footer">
                            <li className="icon__footer">
                                <a href="https://www.facebook.com/Summoners-Cave-113506403700157"><img src={Facebook} alt="" /></a>
                            </li>
                            <li className="icon__footer">
                                <a href="https://www.reddit.com/r/leagueoflegends/comments/gmd46m/clases_de_league_of_legends_para_ser_un_proplayer/"><img src={Reddit} alt="" /></a>
                            </li>
                            <li className="icon__footer">
                                <a href="https://www.instagram.com/summonerscaves/"><img src={Instagram} alt="" /></a>
                            </li>
                            <li className="icon__footer">
                                <a href="https://discord.gg/Nu3GRn"><img src={Discord} alt="" /></a>
                            </li>
                        </ol>
                    </div>

                </div>

            </div>

            <hr className="line__footer" />

            <p className="copyright__footer">
                © 2020 Summonerscave.com All Rights Reserved <br />
                <Link to="/terminos-y-condiciones">Terminos y Condiciones</Link> | <Link to="/privacidad">Politica de Privacidad</Link>
            </p>

        </footer>
    )
};

const mapDispatchToProps = {
    sendEmail,
};

export default connect(null, mapDispatchToProps)(Footer);