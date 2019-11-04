import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { loginUser } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';


const Register = () => {
  return (
    <>
    <section className="register">
    <Header/>
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre"/>
        <input className="input" type="text" placeholder="Correo"/>
        <input className="input" type="password" placeholder="Contraseña"/>
        <button className="button">Registrarme</button>
      </form>
      <a href="">Iniciar sesión</a>
    </section>
  </section>
    </>
  );
};

export default Register;
