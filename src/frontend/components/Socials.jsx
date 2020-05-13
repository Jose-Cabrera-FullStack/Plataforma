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
                <a href="http://facebook.com"><img src={facebook} /></a>
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
)

export default Socials;