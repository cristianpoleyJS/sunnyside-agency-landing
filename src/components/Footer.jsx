import React from 'react'
import '../styles/footer-styles.css'
import Logo from '../assets/Logo.jsx'
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg';
import pinterest from '../assets/icon-pinterest.svg';

export default function Footer() {
  return (
    <section className="footer">
        <div className="footer-content">
          <span className="footer-logo">
            <Logo height={30} width={124} fill={'#2d7363'} />
          </span>
          <div className="footer-buttons">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="footer-social-media">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={pinterest} />
          </div>
        </div>
    </section>
  )
}
