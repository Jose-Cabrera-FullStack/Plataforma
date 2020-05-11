import React,{useState} from 'react';
import '../assets/styles/components/Term.scss';

import ArrowDown from '../assets/static/images/arrow-blue-down.svg'
import ArrowRight from '../assets/static/images/arrow-blue-right.svg'

import Person from '../assets/static/faq/faq-person__talk.svg';

const TermAndConditions = () => {

    const [isToggled1, setToggled1] = useState(false);
    const [isToggled2, setToggled2] = useState(false);
    const [isToggled3, setToggled3] = useState(false);
    const [isToggled4, setToggled4] = useState(false);
    const [isToggled5, setToggled5] = useState(false);
    const [isToggled6, setToggled6] = useState(false);

    const toggleTrueFalse1 = () => setToggled1(!isToggled1);
    const toggleTrueFalse2 = () => setToggled2(!isToggled2);
    const toggleTrueFalse3 = () => setToggled3(!isToggled3);
    const toggleTrueFalse4 = () => setToggled4(!isToggled4);
    const toggleTrueFalse5 = () => setToggled5(!isToggled5);
    const toggleTrueFalse6 = () => setToggled6(!isToggled6);

    
    return(
    <section id="faq" className="faq">

        <h1 className="faq__tittle">Terminos y Condiciones</h1>

            <div className="faq__display">

                <div className="faq__right__rectangle faq__right__rectangle--fix">
                    <div className="faq__right__rectangle__inside">

                        <div onClick={toggleTrueFalse1} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>INFORMACIÓN RELEVANTE</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled1 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled1 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña. <br/> <br/>
                            El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos. summonerscave.com no asume la responsabilidad en caso de que entregue dicha clave a terceros. <br/> <br/>
                            Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico. <br/> <br/>
                            Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en las compras realizadas en este sitio web.</p>
                        </div>

                        <hr />

                        <div onClick={toggleTrueFalse2} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>LICENCIA</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled2 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled2 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            Summoner's Cave  a través de su sitio web concede una licencia para que los usuarios utilicen  los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.</p>
                        </div>

                        <hr />

                        <div onClick={toggleTrueFalse3} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>PROPIEDAD</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled3 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled3 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad  de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan  sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será  responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.</p>
                        </div>

                        <hr />

                        <div className="faq__right__rectangle__inside__last__text" onClick={toggleTrueFalse4} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>POLÍTICA DE REEMBOLSO Y GARANTÍA</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled4 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled4 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            En el caso de productos que sean  mercancías irrevocables no-tangibles, no realizamos reembolsos después de que se envíe el producto, usted tiene la responsabilidad de entender antes de comprarlo.  Le pedimos que lea cuidadosamente antes de comprarlo. Hacemos solamente excepciones con esta regla cuando la descripción no se ajusta al producto. Hay algunos productos que pudieran tener garantía y posibilidad de reembolso pero este será especificado al comprar el producto. En tales casos la garantía solo cubrirá fallas de fábrica y sólo se hará efectiva cuando el producto se haya usado correctamente. La garantía no cubre averías o daños ocasionados por uso indebido. Los términos de la garantía están asociados a fallas de fabricación y funcionamiento en condiciones normales de los productos y sólo se harán efectivos estos términos si el equipo ha sido usado correctamente. Esto incluye:
                            <br/> <br/>
                            – De acuerdo a las especificaciones técnicas indicadas para cada producto. <br/>
                            – En condiciones ambientales acorde con las especificaciones indicadas por el fabricante. <br/>
                            – En uso específico para la función con que fue diseñado de fábrica. <br/>
                            – En condiciones de operación eléctricas acorde con las especificaciones y tolerancias indicadas.</p>
                        </div>

                        <hr />

                        <div className="faq__right__rectangle__inside__last__text" onClick={toggleTrueFalse5} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>COMPROBACIÓN ANTIFRAUDE</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled5 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled5 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            La compra del cliente puede ser aplazada para la comprobación antifraude. También puede ser suspendida por más tiempo para una investigación más rigurosa, para evitar transacciones fraudulentas.</p>
                        </div>

                        <hr />

                        <div className="faq__right__rectangle__inside__last__text" onClick={toggleTrueFalse6} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>PRIVACIDAD</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled6 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled6 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            Este sitio web summonerscave.com garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.
                            <br/> <br/>
                            La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.
                            <br/> <br/>
                            Summoner's Cave reserva los derechos de cambiar o de modificar estos términos sin previo aviso.</p>
                        </div>

                    </div>
                </div>

            </div>

    </section>
)}

export default TermAndConditions;