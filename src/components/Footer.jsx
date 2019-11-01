import React from 'react';
import '../assets/styles/components/Footer.scss';
import Payment from '../assets/static/images/payment-icons-footer.png';
import Facebook from '../assets/static/images/social-network/facebook-color.svg';
import Google from '../assets/static/images/social-network/google-color.svg';
import Twitter from '../assets/static/images/social-network/linkedin-color.svg';
import Linkedin from '../assets/static/images/social-network/twitter-color.svg';


const Footer = () => (
  <footer id="footer" class="footer">
        <form action="" method="POST">
            <input class="input" type="email" name="email" placeholder="Enter your email address"/>
            <button class="btn__secondary" type="submit">Get more info</button>
        </form>

        <div class="container__footer">

            <div class="footer__social-network">

                <ol class="list__footer">
                    <li class="menu__footer">
                        <a href="#">Medios de pago</a>
                    </li>
                    <li class="menu__footer">
                        <a href="#">About Us</a>
                    </li>
                    <li class="menu__footer">
                        <a href="#">Medios de pago</a>
                    </li>

                </ol>

            </div>
            <figure>
                <img class="payment__footer" src={Payment} alt=""/>
            </figure>

            <div class="footer__information">
                <h2 class="footer__title">SUMMONER’S CAVE</h2>
                <p class="parragraph__footer">
                    Summoner’s Cave isn’t endorsed by Riot Games and doesn’t reflect the views <br/>
                    or opinions of Riot Games or anyone officially involved in producing or <br/>
                    managing League of Legends. League of Legends and Riot Games are <br/>
                    trademarks or registered trademarks of Riot Games, Inc. League of Legends © <br/>
                    Riot Games, Inc.
                </p>

                <div>
                    <ol class="icons__footer">
                        <li class="icon__footer">
                            <a href=""><img src={Facebook} alt=""/> </a>
                        </li>
                        <li class="icon__footer">
                            <a href=""><img src={Google} alt=""/> </a>
                        </li>
                        <li class="icon__footer">
                            <a href=""><img src={Linkedin} alt=""/> </a>
                        </li>
                        <li class="icon__footer">
                            <a href=""><img src={Twitter} alt=""/> </a>
                        </li>
                    </ol>
                </div>

            </div>

        </div>

        <hr class="line__footer"/>

        <p class="copyright__footer">
            © 2019 Summonerscave.com All Rights Reserved <br/>
            <a href="">Terms of use</a> | <a href="">Privacy Policy</a>
        </p>



    </footer>
);

export default Footer;