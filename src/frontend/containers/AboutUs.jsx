import React, { useState } from 'react';

import '../assets/styles/components/AboutUs.scss';

const AboutUs = () => {
    return(
        <section className="about">
            <h1 className="about__principal__title">HAS LLEGADO AQUI POR ALGO</h1>

            <h3 className="about__principal__subtitle">Necesitas dominar el arte de jugar bien para poder alcanzar las metas que te propusiste, Ser LA PROXIMA estrella de League Of Legends.</h3>

            <div className="tables">

                <div className="left__table">

                    <div>
                        <figure><img src="" alt=""/></figure>
                        <h4 className="left__table__title">Años de experiencia</h4>
                        <p className="left__table__text">Tenemos mas de 10 años jugando League <br/>
                            of Legend. Mas te 3 años enseñando y <br/>
                            capacitando a jugadores de todas partes <br/>
                            del mundo. </p>
                    </div>

                    <div>
                        <figure><img src="" alt=""/></figure>
                        <h4 className="left__table__title">¿Cómo llegamos acá?</h4>
                        <p className="left__table__text">Nos dimos cuenta de la falta de personas <br/> 
                            que enseñaran de manera profesional a <br/>
                            los jugadores que querían convertir esto <br/>
                            en su estilo de vida e incluso "vivir" de él. </p>
                    </div>

                    <div>
                        <figure><img src="" alt=""/></figure>
                        <h4 className="left__table__title">Integrantes</h4>
                        <p className="left__table__text">En nuestro equipo se encuentran, <br/>
                            jugadores profesionales que han jugado <br/>
                            en la liga nacional de Argentina. Junto <br/>
                            a entrenadores profesionales que han <br/>
                            llevado equipos a semifinales nacionales
                            *Mejorar* </p>
                    </div>

                </div>

                <div className="right__table">

                    <div>
                        <figure><img src="" alt=""/></figure>
                        <h3 className="right__table__title">Nuestra Misión</h3>
                        <p className="right__table__text">Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a <br/>
                            Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir <br/>
                            a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                    </div>

                    <div>
                        <figure><img src="" alt=""/></figure>
                        <h3 className="right__table__title">Nuestra esencia </h3>
                        <p className="right__table__text">Nos motiva la creencia de que los Latinoamericanos somos mucho mas de lo que el mundo dice de <br/>
                            nosotros. Nos han hecho creer que somos menos que el resto. Es hora de demostrarle al resto que <br/>
                            somos una gran potencia. Es NUESTRO momento para Triunfar y Summoner's Cave quiere ser parte <br/>
                            de la próxima revolución.</p>
                    </div>

                    <div>
                        <figure><img src="" alt=""/></figure>
                        <h3 className="right__table__title">Nuestra Promesa </h3>
                        <p className="right__table__text">Verte desarrollar tu máximo potencial. Alcanzar aquellas metas que creíste imposible. Representar <br/>
                            los valores en los que crees. Sentir orgullo por el esfuerzo que pusiste y sentir que lo valió. Ser feliz <br/>
                            con los resultados conseguidos. Esa es Nuestra Promesa...Esperanza.</p>
                    </div>

                    <div>
                        <figure><img src="" alt=""/></figure>
                        <h3 className="right__table__title">Nuestra Estilo</h3>
                        <p className="right__table__text">Tenemos como priotidad la Pedagogía en torno a los eSport. Nuestro sueño es brindad <br/>
                            educación de calidad que pueda cambiar como el mundo ve los deportes electrónicos. Tenemos esperanza en que <br/>
                            se puede modificar el paradigma social para volver a los videojuegos parte fundamental de la educación.</p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutUs