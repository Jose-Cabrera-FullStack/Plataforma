import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectDate, setFavorite } from '../actions';
import Perfil from '../assets/static/images/perfil-image2x.png'

import '../assets/styles/components/Profile.scss';

const Profile = ({data,classes}) => {
    console.log("classes",classes.length)
    return (
        <section className="profile">
            <div className="profile__display">

                <div>
                    <img className="profile__user__avatar" src={Perfil} alt="Avatar de perfil" />
                    <div className="profile__user__data">
                        <div>

                            <p>Nickname</p>
                            <h5>{data[0].name}</h5>
                            <hr className="register__input__line register__input__line--profile" />

                            <p>Email</p>
                            <h5>{data[0].email}</h5>
                            <hr className="register__input__line register__input__line--profile" />

                            <p>Servidor</p>
                            <h5>{data[0].server}</h5>
                            <hr className="register__input__line register__input__line--profile" />

                        </div>
                    </div>
                </div>

                <div className="profile__right">
                    <div className="profile__welcome">
                        <h1>Welcome Back, MURDOC!</h1>
                        <h3>Si quieres llevar un seguimiento de tus clases,
                        llegaste al lugar correcto.</h3>
                    </div>

                    <div className="profile__stats">
                        <table >
                            <tr className="profile__stats__title">
                                <th>ID</th>
                                <th>STATUS</th>
                                <th>PRECIO</th>
                                <th>COACH</th>
                                <th>N°CLASES</th>
                                <th>FECHA INICIO</th>
                            </tr>
                            {classes.map(item=>(

                                <tr>
                                <td>123</td>
                                <td>Terminada</td>
                                <td>${item.price}</td>
                                <td>{item.coach}</td>
                                <td>{item.premium}</td>
                                <td>{item.schedule}</td>
                            </tr>
                            ))}
                            
                        </table>

                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        user:state.user,
        myClass:state.myClass,
        data:state.data,
        classes:state.class
    };
  };
  
export default connect(mapStateToProps, null)(Profile);