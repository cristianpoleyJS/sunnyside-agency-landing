import React from 'react'
import '../styles/header-styles.css'
import '../styles/menu-hamburger.css'
import Logo from '../assets/Logo.jsx'
import iconHamburger from '../assets/icon-hamburger.svg'
import arrow from '../assets/icon-arrow-down.svg'

export default function Header() {
  return (
    <section className="header">
        <div className="header-content">
            <Logo className="header-logo" height={30} fill={'#fff'} />
            <nav className="menu-hamburger">
                <input type="checkbox" id="menu" />
                <label for="menu"><img src={iconHamburger} /></label>
                <ul> 
                    <li className="arrow-hamburger" />
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                        Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
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
