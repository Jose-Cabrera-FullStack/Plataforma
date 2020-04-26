import React from 'react';
import '../../assets/styles/components/HowToBuy.scss';
import Hand1 from '../../assets/static/images/hands/h1.svg';
import Hand2 from '../../assets/static/images/hands/h2.svg';
import Hand3 from '../../assets/static/images/hands/h3.svg';
import Hand4 from '../../assets/static/images/hands/h4.svg';
import Schedule from '../../assets/static/images/how-to-buy/Schedule-Circle.png';
import Paypal from '../../assets/static/images/how-to-buy/Paypal-Cicle.png';
import Perfil from '../../assets/static/images/how-to-buy/Perfil-Cicle.png';
import Register from '../../assets/static/images/how-to-buy/Register-Cicle.png';
import Example from '../../assets/static/images/example-image.png';


const HowToBuy = () => (
    <section id="how-to-buy" className="how-to-buy">

        <div className="container__how-to-buy">

            <h1 className="title__how-to-buy">¿CÓMO<br /> COMPRAR?_</h1>

            <div className="informations__how-to-buy">
                <div className="information__how-to-buy">

                    <figure>
                        <img className="icon__how-to-buy" src={Hand1} alt="" />
                    </figure>

                    <p className="paragraph__how-to-buy text__1">
                        Presiona el botón de <span className="blue__lightning">Registrarse</span>, créate  <br />
                        una cuenta solo con tu correo electrónico <br />
                        y una contraseña. ¡SI ASI DE SIMPLE!
                    </p>

                    <figure>
                        <img className="example__how-to-buy example__1" src={Register} alt="" />
                    </figure>
                </div>

                <div className="information__how-to-buy">
                    <figure>
                        <img className="icon__how-to-buy" src={Hand2} alt="" />
                    </figure>


                    <p className="paragraph__how-to-buy text__2">
                    Escoge el Plan que mas te guste, presiona <br/>
                        el botón de "<span className="blue__lightning">¡Comprar Ahora!</span>" y te llevara <br/>
                        al ultimo paso para comenzar a ¡SUBIR!
                        </p>

                    <figure>
                        <img className="example__how-to-buy example__2" src={Schedule} alt="" />
                    </figure>
                </div>

                <div className="information__how-to-buy">
                    <figure>
                        <img className="icon__how-to-buy" src={Hand3} alt="" />
                    </figure>

                    <p className="paragraph__how-to-buy text__3">
                    Veras una ventana donde podrás escoger el <br/>
                        método de pago que mas te guste RECUERDA <br/>
                        Luego presiona el botón de "Finalizar Compra" <br/>
                        <span className="blue__lightning">VER EL PRECIO ANTES DE FINALIZAR LA COMPRA.</span>    
                    </p>

                    <figure>
                        <img className="example__how-to-buy example__3" src={Paypal} alt="" />
                    </figure>
                </div>

                <div className="information__how-to-buy">
                    <figure>
                        <img className="icon__how-to-buy" src={Hand4} alt="" />
                    </figure>

                    <p className="paragraph__how-to-buy text__4">
                    Nos comunicamos via Discord contigo. Esto con <br/>
                        la finalidad de hacer lo mas personalizado <br/>
                        posible las clases para ti. Recuerda que la <br/>
                        primera clase es <span className="blue__lightning">¡GRATUITA!</span>
                    </p>

                    <figure>
                        <img className="example__how-to-buy example__4" src={Perfil} alt="" />
                    </figure>
                </div>


            </div>

        </div>

    </section>
)

export default HowToBuy;
