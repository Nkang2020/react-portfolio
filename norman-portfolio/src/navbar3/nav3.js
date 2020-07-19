import React, { Component } from 'react';
import logo from '../images/new-logo1.png';
import './nav3.css';
import { Link } from 'react-scroll';

class NavBar extends Component {
    render() {
        return (
        <div className="nav3">
            <a className="logolink" href="/"><img className="logo" src={logo} alt="logo"/></a>
            <div>
            <a href="/#work">WORK</a>
            <a className="mid" href="./about">ABOUT</a>
            <a target="_blank" href="https://drive.google.com/file/d/1vjN6fGE59BboP9U702UJkBNLa3iD-2to/view?usp=sharing">RESUME</a>
            </div>
        </div>
        );
        
    }
}

export default NavBar;