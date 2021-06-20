import React from 'react'
import '../styles/header-styles.css'
import Logo from '../assets/Logo.jsx'

export default function Header() {
  return (
    <section className="header">
        <Logo className="header-logo" eight={20} fill={'#fff'} />
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
            <a href="#contact">
                Contact
            </a>
        </div>
        <h1>
            WE ARE CREATIVES
        </h1>
    </section>
  )
}
