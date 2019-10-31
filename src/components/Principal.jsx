import React from 'react';
import Header from '../components/Header';
import '../assets/styles/components/Principal.scss';


const Principal = () => (
    <section className="principal">
        <div className="overlay__principal">
    <Header/>
    <div className="container__principal col-1">

    <div className="">

        <h1 className="title__principal">
            ARE YOU READY <br/> TO BECOME A <br/> BETTER PLAYER?_
        </h1>

        <p className="paragraph__principal">Safe and Reliable LoL Boosting, Coaching & Account Buying Services
            in Season 9</p>
        <div className="btn__principal">
            <button className="btn__primary margin">
                Boost Me
            </button>
            <button className="btn btn__secondary ">
                View Packs
            </button>
        </div>
    </div>

    
</div>

<figure className="scroll__principal col-11">
    <img src="./static/images/scroll.svg" alt=""/>
</figure>
</div>
</section>
)
export default Principal;