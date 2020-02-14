import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/components/Principal.scss';
import facebook from '../../assets/static/images/social-network/facebook-white.svg';
import reddit from '../../assets/static/images/social-network/reddit-white.svg';
import instagram from '../../assets/static/images/social-network/instagram-white.svg';
import discord from '../../assets/static/images/social-network/discord-white.svg';
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
                                <a href="http://facebook.com"><img src={facebook}/></a>
                            </li>
                            <li class="icon discord" >
                                <a href="http://reddit.com"><img src={reddit} /></a>
                            </li>
                            <li class="icon" >
                                <a href="http://instagram.com"><img src={instagram} /></a>
                            </li>
                            <li class="icon" >
                                <a href="http://discord.com"><img src={discord} /></a>
                            </li>
                        </ol>
                    </div>

                    <div class="contentSection">
                        <div class="contentSection__internal">
                            <h1 class="title__principal contentTitle">
                                PREPARATE PARA <br />
                                SER MAS QUE <br />
                                <strong class="blue__lightning">¡UN ESPECTADOR!</strong>_
                            </h1>

                            <p class="paragraph__principal">BRINDAMOS COACHING A PLAYERS DE LEAGUE OF LEGEND <br />
                                DESDE LA TEMPORADA 7.<strong class="blue__lightning "> TU MOMENTO DE SER <br />
                                EL PROTAGONISTA ES AHORA...</strong>
                                
                            </p>

                            <div class="btn__principal">
                                <Link to="/coaching">
                                <button class="btn btn__secondary btn__secondary--fix">
                                    ¡VAMOS A ENTRENAR!
                                </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

            {/* <figure className="scroll__principal col-11">
                <img src="./static/images/scroll.svg" alt="" />
            </figure> */}
        </div>
    </section>

)
export default Principal;