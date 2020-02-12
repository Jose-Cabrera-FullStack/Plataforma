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
                <strong class="paragraph__elo__booting__packs--span">
                        Consigue los mejores precios que se adapten a
                        tus necesidades. </strong>
                    ¿Queres salir de Elo Hell? <strong class="paragraph__elo__booting__packs--span">Te guiaremos.</strong>  <br/>
                    ¿Queres llegar a hacer plays tan buenas como las de Faker?<strong class="paragraph__elo__booting__packs--span"> Te entrenaremos.</strong> ¿Queres ser dueño de tu
                    propio destino? Estas <br/>
                    en el <strong class="paragraph__elo__booting__packs--span">Lugar correcto.</strong> Estas cerca de alcanzar tus sueño, solo te hace falta un <strong class="paragraph__elo__booting__packs--span">Coach</strong> para que te de
                    el empujón que te falta.
                </p>
            </div>

            <div className="packs__coach__booting__packs">

                <div className="pack__coach__booting__packs">
                    <h4>COACHING <br/> NOVATO</h4>
                    <div className="promotion__pack__coach__booting__packs">
                        <p className="paragraph__pack__coach__booting__packs">SAVE 25%</p>
                    </div>
                    <figure className="coachs__coach__booting__packs">
                        <img className="coach1__coach__booting__packs" src={Gold} alt=""/>
                        <img className="coach2__coach__booting__packs" src={Diamond} alt=""/>
                    </figure>
                    <p className="before__coach__booting__packs">Before: $291,25</p>
                    <h5 className="price__coach__booting__packs">$233</h5>
                    <p className="arg__coach__booting__packs">(AR$ 13,980)</p>
                    <div className="time__coach__booting__packs">
                        <figure>
                            <img className="reloj__coach__booting__packs" src={Reloj} alt=""/>
                        </figure>
                        <p className="completion__completion__coach__booting__packs">Completion Time: 9-14 days</p>
                    </div>
                    <Link to="/login">
                    <a className="btn__secondary margin position_btn_packs__coach__booting__packs">BOOST ME</a>
                    </Link>

                </div>
                <div className="pack__coach__booting__packs">
                    <h4>COACHING <br/> PROFESIONAL</h4>
                    <div className="promotion__pack__coach__booting__packs">
                        <p className="paragraph__pack__coach__booting__packs">SAVE 25%</p>
                    </div>
                    <figure className="coachs__coach__booting__packs">
                        <img className="coach1__coach__booting__packs" src={Gold} alt=""/>
                        <img className="coach2__coach__booting__packs" src={Diamond} alt=""/>
                    </figure>
                    <p className="before__coach__booting__packs">Before: $291,25</p>
                    <h5 className="price__coach__booting__packs">$233</h5>
                    <p className="arg__coach__booting__packs">(AR$ 13,980)</p>
                    <div className="time__coach__booting__packs">
                        <figure>
                            <img className="reloj__coach__booting__packs" src={Reloj} alt=""/>
                        </figure>
                        <p className="completion__completion__coach__booting__packs">Completion Time: 9-14 days</p>
                    </div>
                    <Link to="/login">
                    <a className="btn__secondary margin position_btn_packs__coach__booting__packs">BOOST ME</a>
                    </Link>

                </div>
                <div className="pack__coach__booting__packs">
                    <h4>COACHING <br/>AVANZADO</h4>
                    <div className="promotion__pack__coach__booting__packs">
                        <p className="paragraph__pack__coach__booting__packs">SAVE 25%</p>
                    </div>
                    <figure className="coachs__coach__booting__packs">
                        <img className="coach1__coach__booting__packs" src={Gold} alt=""/>
                        <img className="coach2__coach__booting__packs" src={Diamond} alt=""/>
                    </figure>
                    <p className="before__coach__booting__packs">Before: $291,25</p>
                    <h5 className="price__coach__booting__packs">$233</h5>
                    <p className="arg__coach__booting__packs">(AR$ 13,980)</p>
                    <div className="time__coach__booting__packs">
                        <figure>
                            <img className="reloj__coach__booting__packs" src={Reloj} alt=""/>
                        </figure>
                        <p className="completion__completion__coach__booting__packs">Completion Time: 9-14 days</p>
                    </div>
                    <Link to="/login">
                    <a className="btn__secondary margin position_btn_packs__coach__booting__packs">BOOST ME</a>
                    </Link>

                </div>
                <div className="pack__coach__booting__packs">
                    <h4>COACHING <br/>INTERMEDIO</h4>
                    <div className="promotion__pack__coach__booting__packs">
                        <p className="paragraph__pack__coach__booting__packs">SAVE 25%</p>
                    </div>
                    <figure className="coachs__coach__booting__packs">
                        <img className="coach1__coach__booting__packs" src={Gold} alt=""/>
                        <img className="coach2__coach__booting__packs" src={Diamond} alt=""/>
                    </figure>
                    <p className="before__coach__booting__packs">Before: $291,25</p>
                    <h5 className="price__coach__booting__packs">$233</h5>
                    <p className="arg__coach__booting__packs">(AR$ 13,980)</p>
                    <div className="time__coach__booting__packs">
                        <figure>
                            <img className="reloj__coach__booting__packs" src={Reloj} alt=""/>
                        </figure>
                        <p className="completion__completion__coach__booting__packs">Completion Time: 9-14 days</p>
                    </div>
                    <Link to="/login">
                    <a className="btn__secondary margin position_btn_packs__coach__booting__packs">BOOST ME</a>
                    </Link>

                </div>

            </div>
        </div>
    </section>
)
export default EloBoostingPack;