import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  
  <header id="navbar" className="navbar">
  <div className="navbar__logo">
      <h3 className="navbar__title col-1">Summoner's Cave</h3>
  </div>
  <div className="navbar__container">

      <ol className="navbar__list col-10" >
          <li className="navbar__menu padding__top">
              <a href="#">Pricing</a>
          </li>
          <li className="navbar__menu padding__top">
              <a href="#">Coaching</a>
          </li>
          <li className="navbar__menu padding__top">
              <a href="#">Boosting</a>
          </li>
          <li className="navbar__menu btn__primary">
              <a className="register__btn" href="#">REGISTER</a>
          </li>
          <li className="navbar__menu btn__secondary">
              <a href="#">LOGIN</a>
          </li>
      </ol>

  </div>
</header>
);

export default Header;
