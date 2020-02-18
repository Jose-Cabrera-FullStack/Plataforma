import React from 'react';
import '../../assets/styles/components/Services.scss';
import Ranked from '../../assets/static/images/coaching/ranked.svg';
import TFT from '../../assets/static/images/coaching/tft.svg';
import Duo from '../../assets/static/images/coaching/duo-queue.svg';
import Promo from '../../assets/static/images/coaching/promotion.svg';

const Services = () => (

    <section id="services" className="services">
            <h1 className="title__services ">¿QUÉ TE ENSEÑAMOS?_</h1>
        <div className="container__services">
            <div className="service pop">
                <span>
                    <h3 className="title__service">ENTRENAMIENTO <br />MILITAR</h3>
                    <figure>
                        <img className="img__service contentText" src={Ranked} alt="RANKED WINS BOOSTING" />
                        <strong className="pop__service pop__service--special__1">
                        Aprenderas a tener un pensamiento estratega, <br/>
                        dominar tus emociones usando conceptos avanzados <br/>
                        de psicología moderna. Conceptualización de <br/>
                        lógica simbolica en el Macro y Micro juego. <br/>
                        Ve nuestras clases para <br/>
                        volverte UN JUGADOR PROFESIONAL
                    </strong>
                    </figure>
                </span>
            </div>
            <div className="service">
                <span>
                    <h3 className="title__service">TRABAJAR EN<br />EQUIPO</h3>
                    <figure>
                        <img className="img__service contentText" src={TFT} alt="TFT BOOTING" />
                        <strong className="pop__service pop__service--special__2">
                        Entenderás lo importante que es la comunicación <br/>
                        asertiva con tus compañeros. Saber cuando, donde  <br/>
                        y en que momento ir por objetivos. Cuando iniciar una <br/>
                        Team Fighter o cuando retirarse. ¡Acepta el reto de  <br/>
                        ser mejor de lo que jamas imaginaste Ser!
                        </strong>
                    </figure>
                </span>
            </div>
            <div className="service">
                <span>
                    <h3 className="title__service">COACHING PARA<br />COACH</h3>
                    <figure>
                        <img className="img__service contentText" src={Duo} alt="DUO QUEUE BOOSTING" />
                        <strong className="pop__service pop__service--special__3">
                        ¿Quieres ser la figura que todos admiran y hace que <br/>
                        el equipo alcance la victoria? <br/>
                        Capacitate en Pedagogia enfocada en los eSport. <br/>
                        Tendrás las herramientas necesarias para enseñar  <br/>
                        de manera profesional a el Próximo equipo que gane <br/>
                        La LCS y sea reconocido por todo el Mundo.
                        </strong>
                    </figure>
                </span>
            </div>
            <div className="service">
                <span>
                    <h3 className="title__service">ÉTICA<br />PROFESIONAL</h3>
                    <figure>
                        <img className="img__service contentText" src={Promo} alt="PROMOTION BOOSTING" />
                        <strong className="pop__service pop__service--special__4 ">
                        Te enseñaremos "Qué es ser un profesional <br/>
                        de los eSport y vivir de jugar videojuegos". Dietas,  <br/>
                        Dedicación, Compromiso,  <br/>
                        Motivación, Liderazgo, Controlar Emocional <br/>
                        No solo sabrás que es ser un jugador  <br/>
                        eSport, serás UN PROFESIONAL
                        </strong>
                    </figure>
                </span>
            </div>
        </div>
    </section>
)
export default Services;