import React,{useState} from 'react';
import '../assets/styles/components/Term.scss';
import '../assets/styles/components/Privacy.scss';

import ArrowDown from '../assets/static/images/arrow-blue-down.svg'
import ArrowRight from '../assets/static/images/arrow-blue-right.svg'

import Person from '../assets/static/faq/faq-person__talk.svg';

const PrivacyPolicy = () => {

    const [isToggled1, setToggled1] = useState(false);
    const [isToggled2, setToggled2] = useState(false);
    const [isToggled3, setToggled3] = useState(false);
    const [isToggled4, setToggled4] = useState(false);

    const toggleTrueFalse1 = () => setToggled1(!isToggled1);
    const toggleTrueFalse2 = () => setToggled2(!isToggled2);
    const toggleTrueFalse3 = () => setToggled3(!isToggled3);
    const toggleTrueFalse4 = () => setToggled4(!isToggled4);

    
    return(
    <section id="faq" className="privacy">

        <h1 className="faq__tittle">Politica de Privacidad</h1>
        
            <div className="faq__display">

                <div className="faq__right__rectangle faq__right__rectangle--fix">
                    <div className="faq__right__rectangle__inside">

                        <div onClick={toggleTrueFalse1} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>POLÍTICA DE PRIVACIDAD</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled1 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled1 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            El presente Política de Privacidad establece los términos en que Summonerscave.com usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p>
                        </div>

                        <hr />

                        <div onClick={toggleTrueFalse2} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>COOKIE</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled2 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled2 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.
                            Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente, visitas a una web . Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</p>
                        </div>

                        <hr />

                        <div onClick={toggleTrueFalse3} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>ENLACES A TERCEROS</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled3 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled3 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p>
                        </div>

                        <hr />

                        <div className="faq__right__rectangle__inside__last__text" onClick={toggleTrueFalse4} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>CONTROL DE SU INFORMACIÓN PERSONAL</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled4 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled4 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>
                            En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico.  En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.
                            Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
                            Summonerscave.com Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p>
                        </div>

                    </div>
                </div>

            </div>

    </section>
)}

export default PrivacyPolicy;
