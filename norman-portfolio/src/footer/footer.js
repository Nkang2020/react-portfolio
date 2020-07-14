import React, { Component } from 'react';
import './footer.css';


class Footer extends Component {
    render() {
        return (
        <div className="footer">
            <div>
            <a className="email"><span>NKANG2020@GMAIL.COM</span></a>
            <a className="foot-text linked" target="_blank" href="https://www.linkedin.com/in/norman-kang/"><span className="">LINKEDIN</span></a>
            </div>
            <div>
                <span>CODED WITH <span className="heart">&hearts;</span> IN REACT</span>
            </div>
        </div>
        );
        
    }
}

export default Footer;