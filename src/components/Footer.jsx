import React from 'react'
import '../styles/footer-styles.css'
import Logo from '../assets/Logo.jsx'
import twitter from '../assets/icon-twitter.svg';
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import pinterest from '../assets/icon-pinterest.svg';

export default function Footer() {
  return (
    <section className="footer">
        <div className="footer-content">
          <h4 className="footer-logo">
            <Logo height={30} width={124} fill={'#2d7363'} />
          </h4>
          <div className="footer-buttons">
            <a>About</a>
            <a>Services</a>
            <a>Projects</a>
          </div>
          <div className="footer-social-media">
            <img src={facebook} alt="Facebook"/>
            <img src={instagram} alt="Instagram"/>
            <img src={twitter} alt="Twitter"/>
            <img src={pinterest} alt="Pinterest"/>
          </div>
        </div>
    </section>
  )
}
