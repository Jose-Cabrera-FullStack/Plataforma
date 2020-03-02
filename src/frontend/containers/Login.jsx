import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/components/Login.scss';

import facebook from '../assets/static/images/social-network/facebook-white.svg';
import reddit from '../assets/static/images/social-network/reddit-white.svg';
import instagram from '../assets/static/images/social-network/instagram-white.svg';
import discord from '../assets/static/images/social-network/discord-white.svg';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  return (
    <>
      <section className="login">
        
      <div className="register__container">
          <div className="register__container__inside">
            <h2 className="register__container__title">Regístrate</h2>
            <hr className="register__input__line register__input__line--fix" />
            <form className="register__container--form" onSubmit={handleSubmit}>
              <p>INGRESA TU EMAIL</p>
              <input
                name="email"
                className="register__input"
                type="text"
                placeholder="ingresa su email aquí"
                onChange={handleInput}
                required
              />
              <hr className="register__input__line" />
              <p>INGRESA TU CONTRASEÑA</p>
              <input
                name="password"
                className="register__input"
                type="password"
                placeholder="Contraseña"
                onChange={handleInput}
                required
              />
              <hr className="register__input__line" />

              <button className="btn btn__secondary btn__register " type="submit">¡VAMOS A ENTRENAR!</button>
            </form>

            <div className="links__display">
              <div>
                <Link to="/login">
                  Iniciar sesión
                </Link>
              </div>

              <div>
                <Link to="/login">
                  ¿No haz recibido aún el mail de confirmación?
                </Link>
              </div>
            </div>

          </div>
        </div>
        <div className="slogan">
          <h1>¿Estas preparado para dejar de ser un Espectador?</h1>
          <h2>Entra para comenzar a entrenar y estar mas cerca de tus sueños</h2>
          <ol className="icons">
            <li class="icon" >
              <a href="http://facebook.com"><img src={facebook} /></a>
            </li>
            <li class="icon discord" >
              <a href="http://reddit.com"><img src={reddit} /></a>
            </li>
            <li class="icon" >
              <a href="http://instagram.com"><img src={instagram} /></a>
            </li>
            <li class="icon" >
              <a href="http://discord.com"><img src={discord} /></a>
            </li>
          </ol>
        </div>

      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
