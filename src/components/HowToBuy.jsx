import React from 'react';
import '../assets/styles/components/HowToBuy.scss';
import Hand from '../assets/static/images/hands/hand.svg';
import Hand1 from '../assets/static/images/hands/hand-1.svg';
import Hand2 from '../assets/static/images/hands/hand-2.svg';
import Hand3 from '../assets/static/images/hands/hand-2.svg';
import Example from '../assets/static/images/example-image.png';


const HowToBuy = () =>(
    <section id="how-to-buy" class="how-to-buy">
        
        <div class="container__how-to-buy">
            
            <div class="title__how-to-buy">
                <h1>How to <br/> Buy?_</h1>
            </div>
            
            <div class="informations__how-to-buy">
                
                <div class="information__how-to-buy">
                    
                    <figure>
                        <img src={Hand} alt=""/>
                    </figure>
                    
                    <p class="paragraph__how-to-buy">
                        Select the details of your purchase. After <br/>
                        clicking the 'Buy Boost' button, you can <br/> 
                        either continue as a guest or as a <br/> 
                        returning customer.
                    </p>
                    
                    <figure>
                        <img class="example__how-to-buy" src={Example} alt=""/>
                    </figure>
                    
                </div>

                <div class="information__how-to-buy">
                    
                    <figure>
                        <img src={Hand1} alt=""/>
                    </figure>
                    
                    
                    <p class="paragraph__how-to-buy">
                        After clicking the 'Buy Boost' button, you <br/>
                            can either continue as a guest or as a <br/>
                            returning customer.
                        </p>
                        
                    <figure>
                        <img class="example__how-to-buy" src={Example} alt=""/>
                    </figure>
                    
                </div>
                
                <div class="information__how-to-buy">
                    
                    <figure>
                        <img src={Hand2} alt=""/>
                    </figure>
                    
                    <p class="paragraph__how-to-buy">
                        After By clicking the 'Purchase' button, <br/>
                        you will be redirected to the chosen <br/>
                        payment gateway.licking the 'Buy Boost' <br/>
                        button, you can either continue as a guest <br/>
                        or as a returning customer.
                    </p>
                    
                    <figure>
                        <img class="example__how-to-buy" src={Example} alt=""/>
                    </figure>
                    
                </div>
                
                <div class="information__how-to-buy">

                    <figure>
                        <img src={Hand3} alt=""/>
                    </figure>

                    <p class="paragraph__how-to-buy">
                        In the members area you can track your <br/>
                        order, spectate, pause or chat live with <br/>
                        your booster!
                    </p>
                    
                    <figure>
                        <img class="example__how-to-buy" src={Example} alt=""/>
                    </figure>
                    
                </div>
                
                
            </div>
            
        </div>

    </section>
)

export default HowToBuy;
