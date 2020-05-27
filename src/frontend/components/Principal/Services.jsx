import React, { useState }  from 'react';
import '../../assets/styles/components/Services.scss';
import '../../assets/styles/components/Animation.scss';
import Ranked from '../../assets/static/images/coaching/ranked.svg';
import TFT from '../../assets/static/images/coaching/tft.svg';
import Duo from '../../assets/static/images/coaching/duo-queue.svg';
import Promo from '../../assets/static/images/coaching/promotion.svg';

import information from '../../assets/static/images/info-violet.svg'

const Services = () => {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    
    return(

    <section id="services" className="services">
            <h1 className="title__services ">¿QUÉ TE ENSEÑAMOS?_</h1>
        <div className="container__services imgloaded">
            <div className="service pop" onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
                <span>
                    <div className="service__title__flex">
                        <h3 className="title__service">ENTRENAMIENTO <br />MILITAR</h3>
                        <figure><img src={information} alt="Información" className="service__information"/></figure>
                    </div>
                    <figure>
                        <img className="img__service contentText" src={Ranked} alt="RANKED WINS BOOSTING" />
                        {isShown1 ? <strong className="pop__service pop__service__services1">
                        Aprenderas a tener un pensamiento estratega, 
                        dominar tus emociones usando conceptos avanzados 
                        de psicología moderna. Conceptualización de 
                        lógica simbolica en el Macro y Micro juego. 
                        Ve nuestras clases para 
                        volverte UN JUGADOR PROFESIONAL
                        </strong> : "" }
                    </figure>
                </span>
            </div>
            
            <div className="service" onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
                <span>
                    <div className="service__title__flex">
                        <h3 className="title__service ">TRABAJAR EN<br />EQUIPO</h3>
                        <figure><img src={information} alt="Información" className="service__information"/></figure>
                    </div>
                    <figure>
                        <img className="img__service contentText" src={TFT} alt="TFT BOOTING" />
                        {isShown2 ? <strong className="pop__service pop__service__services2">
                        Entenderás lo importante que es la comunicación 
                        asertiva con tus compañeros. Saber cuando, donde  
                        y en que momento ir por objetivos. Cuando iniciar una 
                        Team Fighter o cuando retirarse. ¡Acepta el reto de  
                        ser mejor de lo que jamas imaginaste Ser!
                        </strong> : ""}                    
                    </figure>
                </span>
            </div>
            
            <div className="service"onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
                <span>

                    <div className="service__title__flex">
                        <h3 className="title__service">COACHING PARA<br />COACH</h3>
                        <figure><img src={information} alt="Información" className="service__information"/></figure>
                    </div>
                    <figure>
                        <img className="img__service contentText" src={Duo} alt="DUO QUEUE BOOSTING" />
                        {isShown3 ? <strong className="pop__service pop__service__services3">
                            ¿Quieres ser la figura que todos admiran y hace que 
                            el equipo alcance la victoria? 
                            Capacitate en Pedagogia enfocada en los eSport. 
                            Tendrás las herramientas necesarias para enseñar  
                            de manera profesional a el Próximo equipo que gane 
                            La LCS y sea reconocido por todo el Mundo.
                            </strong>: ""}
                        
                    </figure>
                </span>
            </div>
            <div className="service" onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}>
                <span>

                <div className="service__title__flex">
                        <h3 className="title__service">ÉTICA<br />PROFESIONAL</h3>
                        <figure><img src={information} alt="Información" className="service__information service__information__1"/></figure>
                    </div>
                    <figure>
                        <img className="img__service contentText" src={Promo} alt="PROMOTION BOOSTING" />
                        {isShown4 ? <strong className="pop__service pop__service__services4">
                        Te enseñaremos "Qué es ser un profesional 
                        de los eSport y vivir de jugar videojuegos". Dietas,
                        Dedicación, Compromiso,  
                        Motivación, Liderazgo, Controlar Emocional 
                        No solo sabrás que es ser un jugador  
                        eSport, serás UN PROFESIONAL
                        </strong>: ""} 
                    </figure>
                </span>
            </div>
        </div>
    </section>
)}
export default Services;