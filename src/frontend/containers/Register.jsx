import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

import facebook from '../assets/static/images/social-network/facebook-white.svg';
import reddit from '../assets/static/images/social-network/reddit-white.svg';
import instagram from '../assets/static/images/social-network/instagram-white.svg';
import discord from '../assets/static/images/social-network/discord-white.svg';

import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
    birthday: '',
    server: '',
    verified: false
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <>
      <section className="register">
        <div className="register__container">
          <div className="register__container__inside">
            <h2 className="register__container__title">Regístrate</h2>
            <hr className="register__input__line register__input__line--fix" />
            <form className="register__container--form" onSubmit={handleSubmit}>
              <p>INGRESA TU NICKNAME</p>
              <input
                name="name"
                className="register__input"
                type="text"
                placeholder="ingresa Tu apodo aquí"
                onChange={handleInput}
                required
              />
              <hr className="register__input__line" />
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
              {/* Colorcar la verificaciòn de la contraseña */}
              <p>INGRESA LA FECHA EN QUE NACISTE</p>
              <input
                name="birthday"
                className="register__input"
                type="text"
                placeholder="Fecha de Nacimiento"
                onChange={handleInput}
                required
              />
              <hr className="register__input__line" />
              <p>INGRESA EL SERVIDOR DONDE JUEGAS</p>
              <select name="server" onChange={handleInput} className="select__agenda">
                <option value="LAN">LAN</option>
                <option value="LAS">LAS</option>
                <option value="BR">BR</option>
                <option value="NA">NA</option>
              </select>
              <hr className="register__input__line" />

              <div className="register__checkbox">
                <input type="checkbox" />Leí los "Los Términos y Condiciones", también leí "Privacy Policy"
              </div>

              <button className="btn btn__secondary btn__register " type="submit">Registrarme</button>
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
          <h2>Registrate y acércate mas a lograr tus sueños</h2>
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
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
