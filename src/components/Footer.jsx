import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {

    const descvisible = () => {
        document.body.classList += " desc__visible";
        document.body.classList += " left__padding-remove";
      }

      const openContact = () => {
        document.body.classList += " contact__open"
      };

    return (
        
            <footer>
                    <div className="footer__container">
                        <img src={logo} alt="" className="logo footer__logo" />
                  <ul className='footer__list'>
                    <li><a href="#estimate__btn" className='footer__links'>Services</a></li>
                    <li><a href="#contact__name" className='footer__links' onClick={openContact}>Contact</a></li>
                    <li><a href="#" className='footer__links' onClick={descvisible}>About</a></li>
                </ul>  
                </div>
                <p className='footer__copyright-statement'>©2022 Revtekinc.com All rights reserved</p>
            </footer>
        
    );
}

export default Footer;