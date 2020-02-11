import React from 'react';

import '../../assets/styles/components/Principal.scss';
import facebook from '../../assets/static/images/social-network/twitter-color.svg';
import '../../hooks/loader'



const Principal = () => (
    <section className="principal">

        <div id="loader" class="loaded">
            <div class="loading-logo"></div>
        </div>

        <div className="overlay__principal">
            <div className="container__principal col-1">

                <div class="content">
                    <div class="glitch">
                        <div class="glitchit"></div>
                        <div class="glitchit"></div>
                        <div class="glitchit"></div>
                        <div class="glitchit"></div>
                        <div class="glitchit"></div>
                    </div>

                    <div className="social-network__principal">
                        <ol className="icons">
                            <li class="icon" >
                                <img src={facebook} />
                            </li>
                            <li class="icon" >
                                <img src={facebook} />
                            </li>
                            <li class="icon" >
                                <img src={facebook} />
                            </li>
                            <li class="icon" >
                                <img src={facebook} />
                            </li>
                        </ol>
                    </div>

                    <div class="contentSection">
                        <div class="contentSection__internal">
                            <h1 class="title__principal contentTitle">
                                PREPARATE PARA <br />
                                SER MAS QUE <br />
                                <span class="">UN ESPECTADOR!</span>_
                            </h1>

                            <p class="paragraph__principal">BRINDAMOS COACHING A PLAYERS DE LEAGUE OF LEGEND <br />
                                DESDE LA TEMPORADA 7. EL MOMENTO DE SER <br />
                                EL PROTAGONISTA ES AHORA...
                            </p>

                            <div class="btn__principal">
                                <button class="btn btn__secondary btn__secondary--fix">
                                    ¡VAMOS A ENTRENAR!
                                </button>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

            <figure className="scroll__principal col-11">
                <img src="./static/images/scroll.svg" alt="" />
            </figure>
        </div>
    </section>

)
export default Principal;