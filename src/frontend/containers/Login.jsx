import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
// import Google from '../assets/static/images/social-network/google.png'; habilitar despues

import '../assets/styles/components/Login.scss';

import Socials from '../components/Socials';

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

  // const googleLogin = 'http://localhost:4000/auth/google-oauth/' *habilitar el login cuando se reciba los campos necesarios (ex : status)*

  return (
    <>
      <section className="login">
        
      <div className="register__container">
          <div className="register__container__inside">
            <h2 className="register__container__title register__container__title--login">ENTRAR</h2>
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

            {/* <div className="social__network__login">
              <p>or</p>
              <figure>
                <a href={googleLogin}><img src={Google} alt="Google Login"/></a>
              </figure> 
            </div> */}

            <div className="links__display">
              <div>
                <Link to="/register">
                  ¿Aún no tienes una cuenta? Registrate
                </Link>
              </div>

              <div>
                <Link to="/login">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

          </div>
        </div>
        <div className="slogan">
          <h1>¿Estas preparado para dejar de ser un Espectador?</h1>
          <h2>Entra para comenzar a entrenar y estar mas cerca de tus sueños</h2>
          <Socials/>
        </div>

      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
