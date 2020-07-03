import React, { Component } from 'react';
import logo from '../images/new-logo1.png';
import './nav2.css';

class NavBar extends Component {
    render() {
        return (
        <div className="nav2">
            <a className="logolink" href="/"><img className="logo" src={logo} alt="logo"/></a>
            <div>
                <a href="/#work">WORK</a>
                <a className="mid" href="./about">ABOUT</a>
                <a href="#">RESUME</a>
            </div>
        </div>
        );
        
    }
}

export default NavBar;