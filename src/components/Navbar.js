import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo.png' 

import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)

  return (
    <div className='header'>
        <nav className='navbar'>
            <Link 
                className='logo'
                to="hero" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                onClick={closeMenu}>
                <img src={logo} alt='logo'/>
            </Link>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color: '#ffffff'}} />)
                : (<FaBars size={30} style={{color: '#ffffff'}} />)}
            </div>
            <ul className={click ? "nav-menu active" : " nav-menu"}>
                <li className='nav-item'>
                    <Link
                        to="hero" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500}
                        onClick={closeMenu}>
                            Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={-90} 
                        duration={500}
                        onClick={closeMenu}>
                            About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="testimonials" 
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500}
                        onClick={closeMenu}>
                            Testimonials
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="demo" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                        onClick={closeMenu}>
                            Demo
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar