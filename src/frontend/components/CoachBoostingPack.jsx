import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/CoachBoostingPack.scss';
import Gold from '../assets/static/images/elo/Emblem_Gold.png';
import Diamond from '../assets/static/images/elo/Emblem_Diamond.png';
import Reloj from '../assets/static/images/reloj-shape.png';


const EloBoostingPack = () =>(

    <section id="coach__booting__packs" className="coach__booting__packs">
        <div className="container__coach__booting__packs">
            <div className="header__coach__booting__packs">
                <h2 className="title__container__coach__booting__packs">
                PAQUETES DE COACHING_
                </h2>
                <p className="paragraph__coach__booting__packs">
                    <strong class="blue__lightning"> Consigue los mejores precios que se adapten a
                    tus necesidades. </strong>
                    ¿Queres salir de Elo Hell? <strong class="blue__lightning">Te guiaremos.</strong>  <br/>
                    ¿Queres llegar a hacer plays tan buenas como las de Faker?<strong class="blue__lightning"> Te entrenaremos.</strong> ¿Queres ser dueño de tu
                    propio destino? Estas <br/>
                    en el <strong class="blue__lightning">Lugar correcto.</strong> Estas cerca de alcanzar tus sueño, solo te hace falta un <strong class="blue__lightning">Coach</strong> para que te de
                    el empujón que te falta.
                </p>
            </div>

            <div className="packs__coach__booting__packs">

                <div className="pack__coach__booting__packs">
                    <h4>COACHING <br/> NOVATO</h4>
                    <div className="promotion__pack__coach__booting__packs">
                        <p className="paragraph__pack__coach__booting__packs">SAVE 10%</p>
                    </div>
                    <figure className="coachs__coach__booting__packs">
                        <img className="coach1__coach__booting__packs" src={Gold} alt=""/>
                        <img className="coach2__coach__booting__packs" src={Diamond} alt=""/>
                    </figure>
                    <p className="before__coach__booting__packs">ANTES: $291,25</p>
                    <h5 className="price__coach__booting__packs">$48</h5>
                    <p className="arg__coach__booting__packs">(AR$ 2.929)</p>
                    <div className="time__coach__booting__packs">
                        <figure>
                            <img className="reloj__coach__booting__packs" src={Reloj} alt=""/>
                        </figure>
                        <p className="completion__completion__coach__booting__packs">Cantidad de sesiones: 10</p>
                    </div>
                    <Link to="/coaching">
                    <a className="btn__secondary margin position_btn_packs__coach__booting__packs">¡ENTRENEMOS!</a>
                    </Link>

                </div>
                <div className="pack__coach__booting__packs special__professional__coaching__boosting_pack">
                    <h4>COACHING <br/> PROFESIONAL</h4>
                    <div className="promotion__pack__coach__booting__packs">
                        <p className="paragraph__pack__coach__booting__packs">SAVE 25%</p>
                    </div>
                    <figure className="coachs__coach__booting__packs">
                        <img className="coach1__coach__booting__packs" src={Gold} alt=""/>
                        <img className="coach2__coach__booting__packs" src={Diamond} alt=""/>
                    </figure>
                    <p className="before__coach__booting__packs">ANTES: $275</p>
                    <h5 className="price__coach__booting__packs">$206</h5>
                    <p className="arg__coach__booting__packs">(AR$ 12.375)</p>
                    <div className="time__coach__booting__packs">
                        <figure>
                            <img className="reloj__coach__booting__packs" src={Reloj} alt=""/>
                        </figure>
                        <p className="completion__completion__coach__booting__packs">Cantidad de sesiones: 50</p>
                    </div>
                    <Link to="/coaching">
                    <a className="btn__secondary margin position_btn_packs__coach__booting__packs">¡ENTRENEMOS!</a>
                    </Link>

                </div>
                <div className="pack__coach__booting__packs special__avance__coaching__boosting_pack">
                    <h4>COACHING <br/>AVANZADO</h4>
                    <div className="promotion__pack__coach__booting__packs">
                        <p className="paragraph__pack__coach__booting__packs">SAVE 20%</p>
                    </div>
                    <figure className="coachs__coach__booting__packs">
                        <img className="coach1__coach__booting__packs" src={Gold} alt=""/>
                        <img className="coach2__coach__booting__packs" src={Diamond} alt=""/>
                    </figure>
                    <p className="before__coach__booting__packs">ANTES: $165</p>
                    <h5 className="price__coach__booting__packs">$135</h5>
                    <p className="arg__coach__booting__packs">(AR$ 7.920)</p>
                    <div className="time__coach__booting__packs">
                        <figure>
                            <img className="reloj__coach__booting__packs" src={Reloj} alt=""/>
                        </figure>
                        <p className="completion__completion__coach__booting__packs">Cantidad de sesiones: 30</p>
                    </div>
                    <Link to="/coaching">
                    <a className="btn__secondary margin position_btn_packs__coach__booting__packs">BOOST ME</a>
                    </Link>

                </div>
                <div className="pack__coach__booting__packs">
                    <h4>COACHING <br/>INTERMEDIO</h4>
                    <div className="promotion__pack__coach__booting__packs">
                        <p className="paragraph__pack__coach__booting__packs">SAVE 15%</p>
                    </div>
                    <figure className="coachs__coach__booting__packs">
                        <img className="coach1__coach__booting__packs" src={Gold} alt=""/>
                        <img className="coach2__coach__booting__packs" src={Diamond} alt=""/>
                    </figure>
                    <p className="before__coach__booting__packs">ANTES: $110</p>
                    <h5 className="price__coach__booting__packs">$93</h5>
                    <p className="arg__coach__booting__packs">(AR$ 5.610)</p>
                    <div className="time__coach__booting__packs">
                        <figure>
                            <img className="reloj__coach__booting__packs" src={Reloj} alt=""/>
                        </figure>
                        <p className="completion__completion__coach__booting__packs">Cantidad de sesiones: 20</p>
                    </div>
                    <Link to="/coaching">
                    <a className="btn__secondary margin position_btn_packs__coach__booting__packs">BOOST ME</a>
                    </Link>

                </div>

            </div>
        </div>
    </section>
)
export default EloBoostingPack;