import React from "react";
import logo from "../assets/logo.png";
import home from '../App.jsx'



const Nav = () => {

const descvisible = () => {
  document.body.classList += " desc__visible";
  document.body.classList += " left__padding-remove";
}

const openSchedule = () => {
  document.body.classList += " schedule__open"
  document.body.classList += " left__padding-remove";

  document.getElementsByClassName("estimate__btn")[0].addEventListener("click", function(){
    window.scrollTo(0, document.querySelector(".company__description--conatiner-right-lower").offsetTop);
});
};

const openContact = () => {
  document.body.classList += " contact__open"
};

  return (
    <div>
      <nav>
      <div class="menu-wrap">
    <input type="checkbox" class="toggler"></input>
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><a href="/" className="menu__link">Home</a></li>
            <li><a href="#" className="menu__link" onClick={descvisible}>About</a></li>
            <li><a href="#name" className="menu__link" onClick={openSchedule}>Services</a></li>
            <li><a href="#contact__name" className="menu__link" onClick={openContact}>Contact</a></li>
            <li className="nav__link">
              <a href="#name" className="nav__link--link-main">
                <button id="estimate__btn" onClick={openSchedule}>
                 Schedule Estimate
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
        <div className="nav__bar--container">
            <a href="#" onClick={descvisible}><img src={logo} alt="" className="logo logo-big" /></a>
          <ul className="nav__links">
            <li className="nav__link">
              <a href="" className="nav__link--link link__hover-effect">
                Home
              </a>
            </li>
            <li className="nav__link">
              <a href="#" className="nav__link--link link__hover-effect" onClick={descvisible}>
                About
              </a>
            </li>
            <li className="nav__link">
              <a href="#contact__name" className="nav__link--link link__hover-effect" onClick={openContact}>
                Contact
              </a>
            </li>
            <li className="nav__link">
              <a href="#name" className="nav__link--link-main">
                <button id="estimate__btn" onClick={openSchedule}>
                 Schedule Estimate
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
