import React from 'react';
import '../assets/styles/components/Services.scss';

const Services = () =>(

 <section id="services" className="services">
 <div className="title__services">
     <h1>SERVICES_</h1>
 </div>
 <div className="container__services">
     <div className="service">
         <h3 className="title__service">RANKED WINS <br/>BOOST</h3>
         <figure>
             <img className="img__service" src="../static/images/ranked-wins-boost.svg" alt="RANKED WINS BOOSTING"/>
         </figure>
     </div>
     <div className="service">
         <h3 className="title__service">TFT<br/>BOOSTING</h3>
         <figure>
             <img className="img__service" src="./static/images/tft-boosting.svg" alt="TFT BOOTING"/>
         </figure>
     </div>
     <div className="service">
         <h3 className="title__service">DUO QUEUE<br/>BOOSTING</h3>
         <figure>
             <img className="img__service" src="./static/images/duo-queue-boosting.svg" alt="DUO QUEUE BOOSTING"/>
         </figure>
     </div>
     <div className="service">
         <h3 className="title__service">PROMOTION<br/>BOOSTING</h3>
         <figure>
             <img className="img__service" src="./static/images/promotion-boosting.svg" alt="PROMOTION BOOSTING"/>
         </figure>
     </div>

 </div>
</section>
)
export default Services;