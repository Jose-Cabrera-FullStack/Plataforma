import React from 'react';
import '../../assets/styles/components/FAQ.scss';

import Communicate from '../../assets/static/faq/faq-communicate.svg';
import Integrate from '../../assets/static/faq/faq-integrate.svg';
import Person from '../../assets/static/faq/faq-person__talk.svg';
import Question from '../../assets/static/faq/faq-question.svg';

const FAQ = () => (

    <section id="faq" className="faq">
        <h1 className="faq__tittle">HAS LLEGADO HASTA AQUI POR ALGO...</h1>
        <h2 className="faq__subtittle">Necesitas dominar el arte de jugar bien para poder alcanzar las metas que te propusiste, Ser LA PROXIMA estrella
            de League Of Legends.
        </h2>

        <div className="faq__display">

            <div className="faq__left__rectangle">

                <div className="faq__left__rectangle__inside">

                    <div className="faq__left__rectangle__display">
                        <div className="faq__left__rectangle__img">
                            <img src={Question} alt="" />
                        </div>
                        <div className="faq__left__rectangle__info">
                            <h3 className="faq__left__rectangle__tittle">Años de experiencia</h3>
                            <p className="faq__left__rectangle__text">Tenemos mas de 10 años jugando League
                            of Legend. Mas te 3 años enseñando y
                            capacitando a jugadores de todas partes
                        del mundo. </p>
                        </div>
                    </div>

                    <div className="faq__left__rectangle__display">
                        <div className="faq__left__rectangle__img">
                            <img src={Communicate} alt="" />
                        </div>
                        <div>
                            <h3 className="faq__left__rectangle__tittle">¿Cómo llegamos acá?</h3>
                            <p className="faq__left__rectangle__text">Nos dimos cuenta de la falta de personas
                                que enseñaran de manera profesional a
                                los jugadores que querían convertir esto
                            en su estilo de vida e incluso "vivir" de él. </p>
                        </div>
                    </div>

                    <div className="faq__left__rectangle__display">
                        <div className="faq__left__rectangle__img">
                            <img src={Integrate} alt="" />
                        </div>
                        <div>
                            <h3 className="faq__left__rectangle__tittle">Integrantes</h3>
                            <p className="faq__left__rectangle__text">En nuestro equipo se encuentran,
                            jugadores profesionales que han jugado
                            en la liga nacional de Argentina. Junto
                            a entrenadores profesionales que han
                            llevado equipos a semifinales nacionales
                        </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="faq__right__rectangle">
                <div className="faq__right__rectangle__inside">

                    <div >
                        <div className="faq__right__rectangle__display">
                            <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                            <h2>Nuestra Mision</h2>
                        </div>
                        <p>Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a
                        Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir
                a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                    </div>

                    <div>
                        <div className="faq__right__rectangle__display">
                            <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                            <h2>Nuestra Mision</h2>
                        </div>
                        <p>Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a
                        Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir
                a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                    </div>

                    <div>
                        <div className="faq__right__rectangle__display">
                            <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                            <h2>Nuestra Mision</h2>
                        </div>
                        <p>Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a
                        Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir
                a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                    </div>

                    <div>

                        <div className="faq__right__rectangle__display">
                            <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                            <h2>Nuestra Mision</h2>
                        </div>
                        <p>Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a
                        Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir
                a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
)
export default FAQ;