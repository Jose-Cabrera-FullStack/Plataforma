import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';

import '../assets/styles/components/Header.scss';

const Header = props => {

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
      <Link to="/">
        <div className="navbar__logo">
          <h3 className="navbar__title">Summoner's Cave</h3>
        </div>
      </Link>
      <div className="navbar__container">

        <ol className="navbar__list col-10" >
          <Link to="/coaching">
            <li className="navbar__menu padding__top">
              COACHING
              </li>
          </Link>
          <Link to="/sobre-nosotros">
            <li className="navbar__menu padding__top padding__top--fix">
              SOBRE NOSOTROS
              </li>
          </Link>
          <Link to="/contactanos">
            <li className="navbar__menu padding__top">
              CONTACTO
              </li>
          </Link>
          <Link to="/faq">
            <li className="navbar__menu padding__top">
              DUDAS
              </li>
          </Link>

          {hasUser ?
            <Link to="/login">
              <li className="navbar__menu btn__secondary">
                <a onClick={handleLogout} >Cerrar Sesión</a>
              </li>
            </Link> :

            <Link to="/register" >
              <li className="navbar__menu btn__primary">
                <a className="register__btn">REGISTER</a>
              </li>
            </Link>
          }
          {hasUser ?
            <Link to="/">
              <li className="navbar__menu btn__secondary">
                <a>{user.email}</a>
              </li>
            </Link> :
            <Link to="/login">
              <li className="navbar__menu btn__secondary">
                <a>LOGIN</a>
              </li>
            </Link>

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
