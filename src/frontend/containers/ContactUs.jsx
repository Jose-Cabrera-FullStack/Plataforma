import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendEmail } from '../actions';
import '../assets/styles/components/ContactUs.scss';
import '../assets/styles/components/Register.scss';

import Socials from '../components/Socials';

const Contact = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    case: '¿Quieres ser parte?',
    message: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendEmail(form, '/');
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
              <select name="case" onChange={handleInput} className="select__agenda" required>
                <option value="COACHING">¿Quieres ser parte?</option>
                <option value="RECOMENDACION">¿Alguna recomendación?</option>
                <option value="QUEJA">¿Algo no funciona?</option>
                <option value="REVIEW">¿Qué te parecieron las clases?</option>
              </select>
              <hr className="register__input__line" />

              <p>INGRESA TU NICKNAME</p>
              <input
                name="name"
                className="register__input"
                type="text"
                placeholder="Coloca tu Nombre de Invocador"
                onChange={handleInput}
                required
              />
              <hr className="register__input__line" />

              <p>INGRESA TU EMAIL</p>
              <input
                name="email"
                className="register__input"
                type="email"
                placeholder="Coloca el E-mail donde te contactaremos"
                onChange={handleInput}
                required
              />
              <hr className="register__input__line" />
            <p>¿TIENES ALGUNA RECOMENDACIÓN?</p>
              <textarea
              name="message"
              className="register__input"
              type="text"
              placeholder="Coloca tu comentario"
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
  sendEmail,
};

export default connect(null, mapDispatchToProps)(Contact);
