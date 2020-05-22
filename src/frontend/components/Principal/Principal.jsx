import React from 'react';
import { Link } from 'react-router-dom';

import Socials from '../Socials';

import '../../assets/styles/components/Principal.scss';
import '../../assets/styles/components/Animation.scss';
import Scroll from '../../assets/static/images/scroll.svg';


const Principal = () => (
    <section className="principal">

        <div id="loader" className="loaded">
            <div className="loading-logo"></div>
        </div>

        <div className="overlay__principal imgloaded">
            <div className="container__principal col-1">

                <div className="content">
                    <div className="glitch">
                        <div className="glitchit"></div>
                        <div className="glitchit"></div>
                        <div className="glitchit"></div>
                        <div className="glitchit"></div>
                        <div className="glitchit"></div>
                    </div>

                    <Socials/>

                    <div className="contentSection">
                        <div className="contentSection__internal">
                            <h1 className="title__principal contentTitle">
                                PREPARATE PARA <br />
                                SER MAS QUE <br />
                                UN <strong className="blue__lightning">ESPECTADOR!</strong>
                            </h1>

                            <div className="rectangle__principal movement__left__to__right rectangle__1"></div>
                            
                            <div className="rectangle__secundary movement__right__to__left rectangle__2"></div>
                            
                            <div className="rectangle__white movement__top__to__bottom rectangle__3"></div>
                            
                            <div className="rectangle__white movement__top__to__bottom rectangle__4"></div>
            
                            <div className="rectangle__principal movement__right__to__left rectangle__5"></div>
                            
                            <div className="rectangle__principal movement__left__to__right rectangle__6"></div>
                            
                            <div className="rectangle__secundary movement__right__to__left rectangle__7"></div>

                            <div className="rectangle__white movement__right__to__left--right rectangle__8"></div>
                            
                            <p className="paragraph__principal">BRINDAMOS COACHING A PLAYERS DE LEAGUE OF LEGENDS <br />
                                DESDE LA TEMPORADA 7.TU MOMENTO DE SER <br />
                                <strong className="blue__lightning ">EL PROTAGONISTA</strong> ES AHORA...
                                
                            </p>

                            <div className="btn__principal">
                                <Link to="/coaching">
                                <button className="btn__secondary btn__secondary--fix">
                                    ¡VAMOS A ENTRENAR!
                                </button>
                                </Link>
                            </div>


                        </div>

                    </div>
                </div>


            </div>

            <figure className="scroll__principal">
                <img src={Scroll} alt="" />
            </figure>
        </div>

        <p className="version">
            version: Alpha 1.0
        </p>

    </section>

)
export default Principal;