import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

import Socials from '../components/Socials';

import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
    birthday: '',
    server: 'LAS',
    verified: false
  });

  const [checked, setChecked] = useState(false)

  const handleClick = () => setChecked(!checked)

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

  console.log(checked)

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
              <select name="server" onChange={handleInput} className="select__agenda" required>
                <option value="LAN">LAN</option>
                <option value="LAS">LAS</option>
                <option value="BR">BR</option>
                <option value="NA">NA</option>
              </select>
              <hr className="register__input__line" />

              <div className="register__checkbox">
                <input type="checkbox" checked={checked} onClick={handleClick}/>Leí los "<Link to="/terminos-y-condiciones"><strong className="links__hover">Términos y Condiciones</strong></Link>", también leí "<Link to="/privacidad"><strong className="links__hover">Politicas de Privacidad</strong></Link>"
              </div>
              {checked ? <button className="btn btn__secondary btn__register " type="submit">Registrarme</button> : <button className="btn btn__secondary btn__register btn__not__allowed " type="submit" disabled>Registrarme</button> }
            
            </form>

            <div className="links__display">
              <div>
                <Link to="/login">
                  <strong className="links__hover">Iniciar sesión</strong>
                </Link>
              </div>

              <div >
                <Link to="/login">
                  <strong className="links__hover">¿No haz recibido aún el mail de confirmación?</strong>
                </Link>
              </div>
            </div>

          </div>
        </div>
        <div className="slogan">
          <h1>¿Estas preparado para dejar de ser un Espectador?</h1>
          <h2>Registrate y acércate mas a lograr tus sueños</h2>
          <Socials/>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
