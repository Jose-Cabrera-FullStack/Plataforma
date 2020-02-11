import React from 'react';
import '../../assets/styles/components/Services.scss';
import Ranked from '../../assets/static/images/boosting/ranked-wins-boost.svg';
import TFT from '../../assets/static/images/boosting/tft-boosting.svg';
import Duo from '../../assets/static/images/boosting/duo-queue-boosting.svg';
import Promo from '../../assets/static/images/boosting/promotion-boosting.svg';

const Services = () =>(

 <section id="services" className="services">
 <div className="title__services">
     <h1>¿Qué Enseñamos?_</h1>
 </div>
 <div className="container__services">
     <div className="service">
         <h3 className="title__service">ENTRENAMIENTO <br/>MILITAR</h3>
         <figure>
             <img className="img__service contentText" src={Ranked} alt="RANKED WINS BOOSTING"/>
         </figure>
     </div>
     <div className="service">
         <h3 className="title__service">TRABAJAR EN<br/>EQUIPO</h3>
         <figure>
             <img className="img__service contentText" src={TFT} alt="TFT BOOTING"/>
         </figure>
     </div>
     <div className="service">
         <h3 className="title__service">COACHING PARA<br/>COACH</h3>
         <figure>
             <img className="img__service contentText" src={Duo} alt="DUO QUEUE BOOSTING"/>
         </figure>
     </div>
     <div className="service">
         <h3 className="title__service">ÉTICA<br/>PROFESIONAL</h3>
         <figure>
             <img className="img__service contentText" src={Promo} alt="PROMOTION BOOSTING"/>
         </figure>
     </div>

 </div>
</section>
)
export default Services;