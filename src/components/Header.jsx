import React from 'react'
import '../styles/header-styles.css'
import '../styles/menu-hamburger.css'
import Logo from '../assets/Logo.jsx'
import arrow from '../assets/icon-arrow-down.svg'
import iconHamburger from '../assets/icon-hamburger.svg'

export default function Header() {
  return (
    <section className="header">
        <div className="header-content">
            <Logo className="header-logo" height={30} fill={'#fff'} />
            <nav className="menu-hamburger">
                <input type="checkbox" id="menu" />
                <label for="menu"><img src={iconHamburger} alt="Ico Hamburger"/></label>
                <ul> 
                    <li className="arrow-hamburger" />
                    <li>
                        <a>
                            About
                        </a>
                    </li>
                    <li>
                        <a>
                            Services
                        </a>
                    </li>
                    <li>
                        <a>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header-buttons">
                <a>
                    About
                </a>
                <a>
                    Services
                </a>
                <a>
                    Projects
                </a>
                <a className="contact">
                    Contact
                </a>
            </div>
        </div>
        <h1>
            WE ARE CREATIVES
            <img src={arrow} alt="Arrow"/>
        </h1>
    </section>
  )
}
