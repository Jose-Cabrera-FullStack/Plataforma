import React from 'react';
import {Link} from 'react-router-dom';


import '../assets/styles/components/Header.scss';

const Header = () => (
  
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
          <Link to="/register" >
            <li className="navbar__menu btn__primary">
                <a className="register__btn">REGISTER</a>
            </li>
          </Link>

          <Link to="/login"> 
            <li className="navbar__menu btn__secondary">
                <a>LOGIN</a>
            </li>
          </Link>
      </ol>

  </div>
</header>
);

export default Header;
