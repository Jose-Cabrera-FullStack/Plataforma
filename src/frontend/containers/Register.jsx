import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

import Socials from '../components/Socials';
import information from '../assets/static/images/info.svg'

import '../assets/styles/components/Register.scss';

const EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const Register = (props) => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
    birthday: '',
    server: 'LAS',
    verified: false
  });

  const [validate, setValidate] = useState({
    validateName:false,
    validateEmail:false,
    validatePassword:false,
    validateDate:false
  })

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);

  const [checked, setChecked] = useState(false)

  const handleClick = () => setChecked(!checked)

  const handleInput = (event) => {

    handleValidation(event.target)

    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleValidation = (target) =>{

    const name = target.name

    const value = target.value

    if(name == 'name'){
      if(value.length > 5){
        setValues({
          ...validate,
        },
        validate.validateName=true
        )
      }
      if(value.length < 5){
        setValues({
          ...validate,
        },
        validate.validateName=false
        )
      }
    }

    
    if(name == 'email'){

      const emailIsValid = EMAIL_REGEX.test(value);

      if(emailIsValid){
        setValues({
          ...validate,
        },
        validate.validateEmail=true
        )
      }
      if(!emailIsValid){
        setValues({
          ...validate,
        },
        validate.validateEmail=false
        )
      }
    }

    if(name == 'password'){
      if(value.length > 5){
        setValues({
          ...validate,
        },
        validate.validatePassword=true
        )
      }
      if(value.length < 5){
        setValues({
          ...validate,
        },
        validate.validatePassword=false
        )
      }
    }

    if(name == 'birthday'){
      if(value.length < 5 ||value.length >= 4 ){
        setValues({
          ...validate,
        },
        validate.validateDate=true
        )
      }

      if(value.length > 4 || value.length < 4){
        setValues({
          ...validate,
        },
        validate.validateDate=false
        )
      }
      
    }
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };


  // console.log(checked) se necesita estar verificado para realizar las compras

  return (
    <>
      <section className="register">
        <div className="register__container">
          <div className="register__container__inside">
            <h2 className="register__container__title">Regístrate</h2>
            <hr className="register__input__line register__input__line--fix" />
            <form className="register__container--form" onSubmit={handleSubmit}>
              <p className="register__title">INGRESA TU NICKNAME</p>
              <input
                name="name"
                className="register__input"
                type="text"
                placeholder="Coloca Tu apodo aquí"
                onChange={handleInput}
                required
              />
              <img src={information} alt="Informacion" onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}/>
              {isShown1 ? <strong className="pop__service ">Coloca tu nombre de Invocador de League of Legends. Esto nos ayudara a crear las clases mas personalizadas para ti que sea posible.</strong>:""}
              <hr className="register__input__line" />
              {validate.validateName ? <p className="correct__message">¡Esta Excelente así!</p>:<p className="error__message">Debe tener más de 5 caracteres</p>}

              <p className="register__title">INGRESA TU EMAIL</p>
              <input
                name="email"
                className="register__input"
                type="text"
                placeholder="Coloca su email aquí"
                onChange={handleInput}
                required
              />
              <img src={information} alt="Informacion" onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}/>
              {isShown2 ? <strong className="pop__service pop__info">Con este E-mail vas a ingresar a la plataforma Summoner's Cave. También te enviaremos todos los apuntes de las sesiones a este mismo E-mail.</strong>: ""}
              <hr className="register__input__line" />
              {validate.validateEmail ? <p className="correct__message">¡Este mail es Correcto!</p>:<p className="error__message">El mail que estas ingresando es erróneo</p>}

              <p className="register__title">INGRESA TU CONTRASEÑA</p>
              <input
                name="password"
                className="register__input"
                type="password"
                placeholder="Coloca tu nueva contraseña"
                onChange={handleInput}
                required
              />
              <img src={information} alt="Informacion" onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}/>
              {isShown3 ? <strong className="pop__service ">Escoge la contraseña con la que ingresaras a Summoner's Cave. ¡Debe tener al menos 6 caracteres!</strong>:""}
              <hr className="register__input__line" />
              {validate.validatePassword ? <p className="correct__message">¡Esta bien tu Contraseña!</p>:<p className="error__message">Esta muy corta la contraseña</p>}

              {/* Colorcar la verificaciòn de la contraseña */}
              <p className="register__title">INGRESA LA FECHA EN QUE NACISTE</p>
              <input
                name="birthday"
                className="register__input"
                type="text"
                placeholder="Ejemplo: '1996'"
                onChange={handleInput}
                required
              />
              <img src={information} alt="Informacion" onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}/>
              {isShown4 ? <strong className="pop__service ">Coloca el año en el que naciste. ¡Debes ser mayor de 13 años para ingresar!</strong>:""}
              <hr className="register__input__line" />
              {validate.validateDate ? <p className="correct__message">¡Buena fecha para nacer!</p>:<p className="error__message">Deben ser solo el año en el que Naciste.</p>}

              <p className="register__title">INGRESA EL SERVIDOR DONDE JUEGAS</p>
              <select name="server" onChange={handleInput} className="select__agenda" required>
                <option value="LAS">LAS</option>
                <option value="LAN">LAN</option>
                <option value="BR">BR</option>
                <option value="NA">NA</option>
              </select>
              <img src={information} alt="Informacion" onMouseEnter={() => setIsShown5(true)} onMouseLeave={() => setIsShown5(false)}/>
              {isShown5 ? <strong className="pop__service ">Escoge el Servidor donde juegas con tu Nickname de Invocador. Esto nos ayudara a escoger un coach de tu region.</strong>:""}
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

              {/* <div >
                <Link to="/login">
                  <strong className="links__hover">¿No haz recibido aún el mail de confirmación?</strong>
                </Link>
              </div> */}
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
