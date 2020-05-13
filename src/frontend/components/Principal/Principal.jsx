import React from 'react';
import { Link } from 'react-router-dom';

import Socials from '../Socials';

import '../../assets/styles/components/Principal.scss';
import '../../assets/styles/components/Animation.scss';
import Scroll from '../../assets/static/images/scroll.svg';


const Principal = () => (
    <section className="principal">

        <div id="loader" class="loaded">
            <div class="loading-logo"></div>
        </div>

        <div className="overlay__principal imgloaded">
            <div className="container__principal col-1">

                <div class="content">
                    <div class="glitch">
                        <div class="glitchit"></div>
                        <div class="glitchit"></div>
                        <div class="glitchit"></div>
                        <div class="glitchit"></div>
                        <div class="glitchit"></div>
                    </div>

                    <Socials/>

                    <div class="contentSection">
                        <div class="contentSection__internal">
                            <h1 class="title__principal contentTitle">
                                PREPARATE PARA <br />
                                SER MAS QUE <br />
                                UN <strong class="blue__lightning">ESPECTADOR!</strong>
                            </h1>

                            <div className="rectangle__principal movement__left__to__right rectangle__1"></div>
                            
                            <div className="rectangle__secundary movement__right__to__left rectangle__2"></div>
                            
                            <div className="rectangle__white movement__top__to__bottom rectangle__3"></div>
                            
                            <div className="rectangle__white movement__top__to__bottom rectangle__4"></div>
            
                            <div className="rectangle__principal movement__right__to__left rectangle__5"></div>
                            
                            <div className="rectangle__principal movement__left__to__right rectangle__6"></div>
                            
                            <div className="rectangle__secundary movement__right__to__left rectangle__7"></div>

                            <div className="rectangle__white movement__right__to__left--right rectangle__8"></div>
                            
                            <p class="paragraph__principal">BRINDAMOS COACHING A PLAYERS DE LEAGUE OF LEGENDS <br />
                                DESDE LA TEMPORADA 7.TU MOMENTO DE SER <br />
                                <strong class="blue__lightning ">EL PROTAGONISTA</strong> ES AHORA...
                                
                            </p>

                            <div class="btn__principal">
                                <Link to="/coaching">
                                <button class="btn__secondary btn__secondary--fix">
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
    </section>

)
export default Principal;