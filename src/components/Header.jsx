import React from 'react'
import '../styles/header-styles.css'
import Logo from '../assets/Logo.jsx'
import arrow from '../assets/icon-arrow-down.svg'

export default function Header() {
  return (
    <section className="header">
        <div className="header-content">
            <Logo className="header-logo" height={30} fill={'#fff'} />
            <div className="header-buttons">
                <a href="#about">
                    About
                </a>
                <a href="#services">
                    Services
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#contact" className="contact">
                    Contact
                </a>
            </div>
        </div>
        <h1>
            WE ARE CREATIVES
            <img src={arrow} />
        </h1>
    </section>
  )
}
