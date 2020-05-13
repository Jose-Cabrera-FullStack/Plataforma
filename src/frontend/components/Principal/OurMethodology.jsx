import React from 'react';
import '../../assets/styles/components/OurMethodology.scss';
import Security from '../../assets/static/images/our-methodology/security.svg';
import Time from '../../assets/static/images/our-methodology/time.svg';
import Privacy from '../../assets/static/images/our-methodology/privacy.svg';
import Tracking from '../../assets/static/images/our-methodology/tracking.svg';


const OurMethodology = () =>(
    <section id="our-methodology" className="our-methodology">
        
        <div className="container__our-methodology">
            
            <div >
                <h1 className="title__out-methodology">NUESTRA <br/> METODOLOGIA_</h1>
            </div>

            <div className="informations__our-methodology">
                
                
                <div className="information__our-methodology">
                    
                    <figure>
                        <img className="icon__our-methodology" src={Security} alt=""/>
                    </figure>
                    <div>
                        
                        <h2 className="info-title__our-methodoly">UN GUIA PARA MEJORAR</h2>
                        <p className="paragraph__our-methodology">
                        Sabemos los difícil que puede llegar a ser mejorar en League of Legend, por <br/>
                            eso hemos creado un nuevo plan de estudio fácil de entender y mejor aun, con <br/>
                            RÁPIDOS RESULTADOS! Juega junto a los mejores Players de LAS/LAN codo <br/>
                            a codo, mientras te explican como y porque hacen lo que hacen.
                            </p>
                            
                    </div>
                    
                </div>
                <div className="information__our-methodology">
                    
                    <figure>
                        <img className="icon__our-methodology" src={Time} alt=""/>
                    </figure>
                    <div>
                        
                        <h2 className="info-title__our-methodoly">PLAN DE ESTUDIO PERSONALIZADO</h2>
                        <p className="paragraph__our-methodology">
                        Antes de comenzar, nos comunicamos contigo para hacer un plan a tu <br/>
                            medida. Analizamos tus necesidades, gustos y metas para estructurar una <br/>
                            estrategia donde puedas disfrutar mientras aprendes los conceptos tanto <br/>
                            básicos, intermedios como avanzados del juego. Tenemos Coaches jugando <br/>
                            en ligas profesionales dispuesto a dejarte fácil lo que a ellos les costo tanto!

                        </p>
                        
                    </div>

                </div>
                <div className="information__our-methodology">
                    
                    <figure>
                        <img className="icon__our-methodology" src={Privacy} alt=""/>
                    </figure>
                    <div>
                        
                        <h2 className="info-title__our-methodoly">CUIDAMOS DE TI</h2>
                        <p className="paragraph__our-methodology">
                        Nos encargamos de que nadie se entere (si así lo deseas) de que usaste <br/>
                            nuestros servicios para ser tan bueno como sabemos que puedes llegar a ser. <br/>
                            Si deseas usar un VPN, tenemos disponible esa opción para ti. Ahora luce con <br/>
                            tus amigos las nuevas habilidades que aprendiste solo/a.
                            </p>
                            
                        </div>

                    </div>
                <div className="information__our-methodology">
                    
                    <figure>
                        <img className="icon__our-methodology" src={Tracking} alt=""/>
                    </figure>
                    <div>

                        <h2 className="info-title__our-methodoly">ORDEN DE PRIORIDAD</h2>
                        <p className="paragraph__our-methodology">
                        En Summoner's Cave nos gusta ser Organizados, resolvemos por orden de <br/>
                            llegada las cuentas que recibimos. Si tienes muchas ansias de aprender y <br/>
                            mejorar, brindamos la opción de "Prioridad VIP" donde nos aseguraremos que <br/>
                            estes satisfecho lo antes posible. ¡Tu eres nuestra prioridad!
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
        </div>
    </section>

)
export default OurMethodology;