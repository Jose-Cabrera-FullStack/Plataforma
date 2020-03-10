import React, { useState } from "react";
import '../../assets/styles/components/FAQ.scss';

import ArrowDown from '../../assets/static/images/arrow-blue-down.svg'
import ArrowRight from '../../assets/static/images/arrow-blue-right.svg'

import Communicate from '../../assets/static/faq/faq-communicate.svg';
import Integrate from '../../assets/static/faq/faq-integrate.svg';
import Question from '../../assets/static/faq/faq-question.svg';
import Person from '../../assets/static/faq/faq-person__talk.svg';

// const style = {
//     listContainer: {
//       listStyle: 'none',
//       paddingLeft: 0
//     },
//     itemStyle: {
//       cursor: 'pointer',
//       padding: 5
//     }
//   };
  
//   function MultiselectCheckbox({ options, onChange }) {
//     const [data, setData] = React.useState(options);
  
//     const toggle = item => {
//       data.map((_, key) => {
//         if (data[key].label === item.label) data[key].checked = !item.checked;
//       });
//       setData([...data]);
//       onChange(data);
//     };
  
//     return (
//       <ul style={style.listContainer}>
//         {data.map(item => {
//           return (
//             <li key={item.label} style={style.itemStyle} onClick={() => toggle(item)}>
//               <input readOnly type="checkbox" checked={item.checked || false} />
//               {item.label}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }


const FAQ = () => {

    const [isToggled1, setToggled1] = useState(false);
    const [isToggled2, setToggled2] = useState(false);
    const [isToggled3, setToggled3] = useState(false);
    const [isToggled4, setToggled4] = useState(false);

    const toggleTrueFalse1 = () => setToggled1(!isToggled1);
    const toggleTrueFalse2 = () => setToggled2(!isToggled2);
    const toggleTrueFalse3 = () => setToggled3(!isToggled3);
    const toggleTrueFalse4 = () => setToggled4(!isToggled4);

    // const options = [{ label: 'Item One' }, { label: 'Item Two' }];

    return (
        <section id="faq" className="faq">
            <h1 className="faq__tittle">HAS LLEGADO HASTA AQUI POR ALGO...</h1>
            <h2 className="faq__subtittle">Necesitas dominar el arte de jugar bien para poder alcanzar las metas que te propusiste, Ser LA PROXIMA estrella
                de League Of Legends.
        </h2>

            <div className="faq__display">

                <div className="faq__left__rectangle">

                    <div className="faq__left__rectangle__inside">

                        <div className="faq__left__rectangle__display">
                            <div className="faq__left__rectangle__img">
                                <img src={Question} alt="" />
                            </div>
                            <div className="faq__left__rectangle__info">
                                <h3 className="faq__left__rectangle__tittle">Años de experiencia</h3>
                                <p className="faq__left__rectangle__text">Tenemos mas de 10 años jugando League
                                of Legend. Mas te 3 años enseñando y
                                capacitando a jugadores de todas partes
                        del mundo. </p>
                            </div>
                        </div>

                        <div className="faq__left__rectangle__display">
                            <div className="faq__left__rectangle__img">
                                <img src={Communicate} alt="" />
                            </div>
                            <div>
                                <h3 className="faq__left__rectangle__tittle">¿Cómo llegamos acá?</h3>
                                <p className="faq__left__rectangle__text">Nos dimos cuenta de la falta de personas
                                    que enseñaran de manera profesional a
                                    los jugadores que querían convertir esto
                            en su estilo de vida e incluso "vivir" de él. </p>
                            </div>
                        </div>

                        <div className="faq__left__rectangle__display">
                            <div className="faq__left__rectangle__img">
                                <img src={Integrate} alt="" />
                            </div>
                            <div>
                                <h3 className="faq__left__rectangle__tittle">Integrantes</h3>
                                <p className="faq__left__rectangle__text">En nuestro equipo se encuentran,
                                jugadores profesionales que han jugado
                                en la liga nacional de Argentina. Junto
                                a entrenadores profesionales que han
                                llevado equipos a semifinales nacionales
                        </p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="faq__right__rectangle">
                    <div className="faq__right__rectangle__inside">

                        <div onClick={toggleTrueFalse1} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>Nuestra Mision</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled1 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled1 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a
                            Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir
                a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                        </div>

                        <hr />

                        <div onClick={toggleTrueFalse2} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>Nuestra Mision</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled2 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled2 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a
                            Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir
                a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                        </div>

                        <hr />

                        <div onClick={toggleTrueFalse3} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>Nuestra Mision</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled3 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled3 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a
                            Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir
                a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                        </div>

                        <hr />

                        <div className="faq__right__rectangle__inside__last__text" onClick={toggleTrueFalse4} >
                            <div className="faq__right__rectangle__display">
                                <img className="faq__right__rectangle__inside__person" src={Person} alt="" />
                                <h2>Nuestra Mision</h2>
                                <img className="faq__right__rectangle__inside__person" src={isToggled4 ? ArrowDown : ArrowRight} alt="" />
                            </div>
                            <p className={isToggled4 ? "faq__right__rectangle__text--on" : "faq__right__rectangle__text--off"}>Es apoyar a la escena competitiva de los eSport en el continente de America. Dando mayor énfasis a
                            Latinoametica, somos un diamante en brutal esperando a ser descubierto. Nuestra misión es convertir
                a todos ustedes, apasionados jugadores, en los máximos exponentes de los eSport en todo el mundo.</p>
                        </div>

                    </div>
                </div>

            </div>
            {/* <MultiselectCheckbox
            options={options}
            onChange={data => {
              console.log(data);
            }} 
            />*/}

        </section>
    )
}
export default FAQ;