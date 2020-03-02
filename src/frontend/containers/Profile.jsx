import React, { useState } from 'react';
import Perfil from '../assets/static/images/perfil-image2x.png'

import '../assets/styles/components/Profile.scss';

const Profile = () => {
    return (
        <section className="profile">
            <div className="profile__display">

                <div>
                    <img src={Perfil} alt="" />
                    <div className="profile__user__data">
                        <p>Nombre</p>
                        <h5>Murdoc</h5>

                        <p>Email</p>
                        <h5>murdoc.jose.6@gmail.com</h5>

                        <p>Servidor</p>
                        <h5>LAN</h5>

                    </div>
                </div>

                <div>
                    <div className="profile__welcome">
                        <h1>Welcome Back, MURDOC!</h1>
                        <h3>Si quieres llevar un seguimiento de tus clases,
                        llegaste al lugar correcto.</h3>
                    </div>

                    <div className="profile__stats">
                        <table >
                            <tr>
                                <th>ID</th>
                                <th>STATUS</th>
                                <th>PRECIO</th>
                                <th>COACH</th>
                                <th>N°CLASES</th>
                                <th>FECHA INICIO</th>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td>Terminada</td>
                                <td>$50</td>
                                <td>GUIDO</td>
                                <td>8</td>
                                <td>12/1/2020</td>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td>Terminada</td>
                                <td>$50</td>
                                <td>GUIDO</td>
                                <td>8</td>
                                <td>12/1/2020</td>
                            </tr>
                            <tr>
                                <td>123</td>
                                <td>Terminada</td>
                                <td>$50</td>
                                <td>GUIDO</td>
                                <td>8</td>
                                <td>12/1/2020</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile