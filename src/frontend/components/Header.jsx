import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';

import Perfil from '../assets/static/images/perfil-image.png'
import Arrow from '../assets/static/images/arrow-down.svg'

import '../assets/styles/components/Header.scss';

const Header = props => {

  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);

  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = `email=`;
    document.cookie = `name=`;
    document.cookie = `id=`;
    document.cookie = `token=`;
    props.logoutRequest({});
    window.location.href = '/';
  };

  return (

    <header id="navbar" className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <h3 className="navbar__title">Summoner's Cave</h3>
        </div>
      </NavLink>
      <div className="navbar__container">

        <ol className="navbar__list col-10" >
          <li className="navbar__menu padding__top">
            <NavLink exact to="/coaching" activeClassName="active contentTitle">
              COACHING
          </NavLink>
          </li>
          <li exact className="navbar__menu padding__top">
            <NavLink to="/contactanos" activeClassName="active contentTitle">
              CONTACTO
          </NavLink>
          </li>
          <li exact className="navbar__menu padding__top">
            <NavLink to="/faq" activeClassName="active contentTitle">
              DUDAS
          </NavLink>
          </li>

          {hasUser ?
            <div>

              <li className="navbar__menu__perfil">
                <img className="navbar__menu__perfil__avatar" src={Perfil} alt="" />
                <img src={Arrow} alt="" onClick={toggleTrueFalse}/>
                  <p className="navbar__menu__perfil__name">{user.name}</p>
                <div className={isToggled ? "navbar__menu__perfil__menu--on":"navbar__menu__perfil__menu"}>
                  <NavLink to="/perfil" >
                    <a >Perfil</a>
                  </NavLink>
                  <br/>
                  <br/>
                  <NavLink to="/login" >
                    <a onClick={handleLogout} >Cerrar Sesión</a>
                  </NavLink>
                </div>
              </li>
            </div>
            :

            <NavLink to="/register" >
              <li className="navbar__menu btn__primary">
                <a className="register__btn">REGISTER</a>
              </li>
            </NavLink>
          }
          {hasUser ?
            <NavLink to="/">

            </NavLink> :
            <NavLink to="/login">
              <li className="navbar__menu btn__secondary">
                <a>LOGIN</a>
              </li>
            </NavLink>

          }

        </ol>

      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
