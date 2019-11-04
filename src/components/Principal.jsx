import React from 'react';
import {Link} from 'react-router-dom';


import Header from '../components/Header';
import '../assets/styles/components/Principal.scss';
import shen from '../assets/static/images/shen.jpg';
import eveline from '../assets/static/images/eveline.jpg';
import scroll from '../assets/static/images/scroll.svg';



const Principal = () => (
    <section className="principal">
        <div className="overlay__principal">
    <Header/>
    <picture>
        <source srcSet={eveline} className="eveline" media="(max-width:1000px)"/>
        <img className="shen" src={shen} alt=""/>
    </picture>
    <div className="container__principal col-1">

    <div className="">

        <h1 className="title__principal">
            ARE YOU READY <br/> TO BECOME A <br/> BETTER PLAYER?_
        </h1>

        <p className="paragraph__principal">Safe and Reliable LoL Boosting, Coaching & <br/> Account Buying Services
            in Season 9</p>
        <div className="btn__principal">
            <Link to="/login">
                <button className="btn__primary margin">
                    Boost Me
                </button>
            </Link>

            <Link to="/login">
                <button className="btn btn__secondary ">
                    View Packs
                </button>
            </Link>
        </div>
    </div>

    
</div>

<figure className="scroll__principal col-11">
    <img src={scroll} alt=""/>
</figure>
</div>
</section>
)
export default Principal;