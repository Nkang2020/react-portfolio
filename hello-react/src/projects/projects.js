import React, { Component } from 'react';
import './projects.css';
import slangpic from '../images/slanguage1.png';
import bloompic from '../images/bmhci3.png';

class Projects extends Component {
    render() {
        return (
        <div className="pj">
        <a href="./bloomberg">
            <div className="single-proj1">
            <img className="slang-pic" src={bloompic} />
            </div>
            </a>
            <p>Bloomberg: Machine Learning Experiment Management Platform</p>
            <a href="./slanguage">
            <div className="single-proj2">
                <img className="slang-pic" src={slangpic} />
            </div>
            </a>
            <p>Slanguage: Language translator extension</p>
            <div className="single-proj">
              <div className="inside-1">
              </div>
              <div className="inside-2"></div>
            </div>
            <p>AMFSupport: Issue tracking and monitoring application</p>
            <div className="single-proj">
              <div className="inside-1">
              </div>
              <div className="inside-2"></div>
            </div>
        </div>
        );
        
    }
}

export default Projects;