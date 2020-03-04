import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/components/ContactUs.scss';
import '../assets/styles/components/Register.scss';

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

  return (
    <>
      <section className="contact">
      <div className="register__container">
          <div className="register__container__inside">
            <h2 className="register__container__title register__container__title--contact">CONTACTANOS</h2>
            <hr className="register__input__line register__input__line--fix" />
            <form className="register__container--form" onSubmit={handleSubmit}>
              
              <p>¿QUÉ ESTAS BUSCANDO?</p>
              <select name="contact-us" onChange={handleInput} className="select__agenda" required>
                <option value="COACHING">¿QUIERES SER PARTE?</option>
                <option value="RECOMENDACION">¿ALGUNA RECOMENDACIÓN?</option>
                <option value="QUEJA">¿ALGO NO FUNCIONA BIEN?</option>
                <option value="REVIEW">¿QUÉ TE PARECIERON LAS CLASES?</option>
              </select>
              <hr className="register__input__line" />

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
            <p>¿TIENES ALGUNA RECOMENDACIÓN?</p>
              <textarea
              name="message"
              className="register__input"
              type="text"
              placeholder="Ingresa Tu comentario aquí"
              onChange={handleInput}
              required>
              </textarea>
                
              <hr className="register__input__line" />

              <button className="btn btn__secondary btn__register " type="submit">Enviar Informacion</button>
            </form>

          </div>
        </div>
        <div className="slogan">
          <h1>¿Quieres entender como los Challenger juegan tan bien?</h1>
          <h2>Constancia, Disciplina, Trabajo en Equipo.</h2>
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
