import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutRequest } from '../actions';



import '../assets/styles/components/Header.scss';

const Header = props => {
  
  const { user= {} } = props;
  const hasUser = Object.keys(user).length  >  0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return(
  
    <header id="navbar" className="navbar">
    <Link to="/">
      <div className="navbar__logo">
          <h3 className="navbar__title col-1">Summoner's Cave</h3>
      </div>
    </Link>
    <div className="navbar__container">

        <ol className="navbar__list col-10" >
            <Link to="/">
              <li className="navbar__menu padding__top">
                  PROMO
              </li>
            </Link>
            <Link to="/">
              <li className="navbar__menu padding__top">
                  Boosting
              </li>
            </Link>
            <Link to="/">
              <li className="navbar__menu padding__top">
                  FAQ
              </li>
            </Link>
            <Link to="/">
              <li className="navbar__menu padding__top">
                  Contact
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
            <Link to="/login"> 
              <li className="navbar__menu btn__secondary">
                  <a>{user.email}</a>
              </li>
            </Link>:
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


export default connect(mapStateToProps,mapDispatchToProps)(Header);
