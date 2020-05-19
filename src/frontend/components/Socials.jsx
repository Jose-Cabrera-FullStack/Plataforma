import React from 'react';
import '../assets/styles/components/Principal.scss';

import facebook from '../assets/static/images/social-network/facebook-white.svg';
import reddit from '../assets/static/images/social-network/reddit-white.svg';
import instagram from '../assets/static/images/social-network/instagram-white.svg';
import discord from '../assets/static/images/social-network/discord-white.svg';


const Socials = () => (
    <div className="social-network__principal">
        <ol className="icons">
            <li class="icon" >
            <a href="https://www.facebook.com/Summoners-Cave-113506403700157"><img src={facebook} alt="" /></a>
            </li>
            <li class="icon discord" >
            <a href="https://www.reddit.com/r/leagueoflegends/comments/gmd46m/clases_de_league_of_legends_para_ser_un_proplayer/"><img src={reddit} alt="" /></a>
            </li>
            <li class="icon" >
            <a href="https://www.instagram.com/summonerscaves/"><img src={instagram} alt="" /></a>
            </li>
            <li class="icon" >
            <a href="https://discord.gg/Nu3GRn"><img src={discord} alt="" /></a>
            </li>
        </ol>
    </div>
)

export default Socials;