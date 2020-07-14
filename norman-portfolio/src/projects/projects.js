import React, { Component } from 'react';
import './projects.css';
import slangpic from '../images/slanguage1.png';
import bloompic from '../images/bmhci3.png';
import amfpic from '../images/amf1.png';

class Projects extends Component {
    render() {
        return (
        <div className="pj">
        <a href="./bloomberg">
            <div className="single-proj1">
            <img className="slang-pic" src={bloompic} />
            </div>
            </a>
            {/* <p>Bloomberg: Machine Learning Experiment Management Platform</p> */}
            <a href="./slanguage">
            <div className="single-proj2">
                <img className="slang-pic" src={slangpic} />
            </div>
            </a>
            {/* <p>Slanguage: Language translator extension</p> */}
            <a href="./amf">
            <div className="single-proj3">
                <img className="slang-pic" src={amfpic} />
            </div>
            </a>
            {/* <p>Slanguage: Language translator extension</p> */}
        </div>
        );
        
    }
}

export default Projects;