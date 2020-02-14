import React from 'react';
import '../../assets/styles/components/HowToBuy.scss';
import Hand from '../../assets/static/images/hands/hand.svg';
import Hand1 from '../../assets/static/images/hands/hand-1.svg';
import Hand2 from '../../assets/static/images/hands/hand-2.svg';
import Hand3 from '../../assets/static/images/hands/hand-2.svg';
import Example from '../../assets/static/images/example-image.png';


const HowToBuy = () => (
    <section id="how-to-buy" className="how-to-buy">

        <div className="container__how-to-buy">

            <div className="title__how-to-buy">
                <h1>¿CÓMO<br /> COMPRAR?_</h1>
            </div>

            <div className="informations__how-to-buy">

                <div className="information__how-to-buy">

                    <figure>
                        <img src={Hand} alt="" />
                    </figure>

                    <p className="paragraph__how-to-buy">
                        Presiona el botón de Registrarse, créate  <br />
                        una cuenta solo con tu correo electrónico <br />
                        y una contraseña. ¡SI ASI DE SIMPLE!
                    </p>

                    <figure>
                        <img className="example__how-to-buy" src={Example} alt="" />
                    </figure>

                </div>

                <div className="information__how-to-buy">

                    <figure>
                        <img src={Hand1} alt="" />
                    </figure>


                    <p className="paragraph__how-to-buy">
                    Escoge el Plan que mas te guste, presiona <br/>
                        el botón de "Comprar Ahora!" y te llevara <br/>
                        al ultimo paso para comenzar a ¡SUBIR!
                        </p>

                    <figure>
                        <img className="example__how-to-buy" src={Example} alt="" />
                    </figure>

                </div>

                <div className="information__how-to-buy">

                    <figure>
                        <img src={Hand2} alt="" />
                    </figure>

                    <p className="paragraph__how-to-buy">
                    Veras una ventana donde podrás escoger el <br/>
                        método de pago que mas te guste RECUERDA <br/>
                        VER EL PRECIO ANTES DE FINALIZAR LA COMPRA, <br/>
                        luego presiona el botón de "Finalizar Compra" <br/>
                        y ¡Felicidades eres parte de Summoner's Cave!
                    </p>

                    <figure>
                        <img className="example__how-to-buy" src={Example} alt="" />
                    </figure>

                </div>

                <div className="information__how-to-buy">

                    <figure>
                        <img src={Hand3} alt="" />
                    </figure>

                    <p className="paragraph__how-to-buy">
                    Nos comunicamos via Discord contigo. Esto con <br/>
                        la finalidad de hacer lo mas personalizado <br/>
                        posible las clases para ti. Recuerda que la <br/>
                        primera clase es ¡GRATUITA!
                    </p>

                    <figure>
                        <img className="example__how-to-buy" src={Example} alt="" />
                    </figure>

                </div>


            </div>

        </div>

    </section>
)

export default HowToBuy;
