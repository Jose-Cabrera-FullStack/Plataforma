import React from 'react';
import '../assets/styles/components/OurMethodology.scss';
import Security from '../assets/static/images/our-methodology/security.svg';
import Time from '../assets/static/images/our-methodology/time.svg';
import Privacy from '../assets/static/images/our-methodology/privacy.svg';
import Tracking from '../assets/static/images/our-methodology/tracking.svg';


const OurMethodology = () =>(
    <section id="our-methodology" className="our-methodology">
        
        <div className="container__our-methodology">
            
            <div className="title__out-methodology">
                <h1>OUR <br/> METHODOLOGY_</h1>
            </div>

            <div className="informations__our-methodology">
                
                
                <div className="information__our-methodology">
                    
                    <figure>
                        <img className="icon__our-methodology" src={Security} alt=""/>
                    </figure>
                    <div>
                        
                        <h2 className="info-title__our-methodoly">VPN PROTECTION</h2>
                        <p className="paragraph__our-methodology">
                            To offer the safest lol elo boost on the market, BoostRoyal provides VPN <br/>
                                protection on every order as a standard. The VPN feature helps to manage the <br/>
                                IP address of the booster while boosting on the buyer’s account so the lol <br/>
                                boosting process can stay undetected by RIOT.
                            </p>
                            
                    </div>
                    
                </div>
                <div className="information__our-methodology">
                    
                    <figure>
                        <img className="icon__our-methodology" src={Time} alt=""/>
                    </figure>
                    <div>
                        
                        <h2 className="info-title__our-methodoly">FINISH IN THE GUARANTEE</h2>
                        <p className="paragraph__our-methodology">
                                BoostRoyal is making sure that your lol elo boost is finished in time. Each <br/>
                                submitted order is given a specific deadline and the booster’s goal is to meet <br/>
                                this deadline in the fastest possible manner. The length of the boosting <br/>
                                process depends on the details of the purchase, and the maximum time limit <br/>
                                is indicated when selecting a lol boost.

                        </p>
                        
                    </div>

                </div>
                <div className="information__our-methodology">
                    
                    <figure>
                        <img className="icon__our-methodology" src={Privacy} alt=""/>
                    </figure>
                    <div>
                        
                        <h2 className="info-title__our-methodoly">PRIVACY & APPEAR OFFLINE</h2>
                        <p className="paragraph__our-methodology">
                            We offer the appear offline feature for players who are looking to have a <br/>
                            private boosting experience. This feature can be selected at checkout, and it <br/>
                                assures 100% privacy, as the boosted LoL account shows as offline in the <br/>
                                friend list while the lol boosting process lasts.
                            </p>
                            
                        </div>

                    </div>
                <div className="information__our-methodology">
                    
                    <figure>
                        <img className="icon__our-methodology" src={Tracking} alt=""/>
                    </figure>
                    <div>

                        <h2 className="info-title__our-methodoly">ORDER TRACKING</h2>
                        <p className="paragraph__our-methodology">
                            BoostRoyal has a built-in order tracking system for each purchased lol elo <br/>
                                boost in the member’s area. The system offers different methods of order <br/>
                                following, including a chart of the live match history of the LoL account that is <br/>
                                being boosted, and a spectate button to watch the booster’s performance.
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
        </div>
    </section>

)
export default OurMethodology;