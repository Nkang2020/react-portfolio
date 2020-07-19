import React, { Component } from 'react';
import logo from '../images/new-logo1.png';
import './nav.css';
import { Link } from 'react-scroll';

class NavBar extends Component {
    render() {
        return (
        <div className="nav">
            <a className="logolink" href="/"><img className="logo" src={logo} alt="logo"/></a>
            <div>
            <Link className="scroller" to="work" spy={true} smooth={true} duration={500}>WORK</Link>
            <a className="mid" href="./about">ABOUT</a>
            <a target="_blank" href="https://drive.google.com/file/d/1vjN6fGE59BboP9U702UJkBNLa3iD-2to/view?usp=sharing">RESUME</a>
            </div>
        </div>
        );
        
    }
}

export default NavBar;