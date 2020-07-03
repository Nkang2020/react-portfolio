import React, { Component } from 'react';
import NavBar from './navbar/nav';
import './home.css';
import Projects from './projects/projects';
import Footer from './footer/footer'
import Arrow from './images/arrow-sm.gif';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <NavBar />
          <h2 className="intro">HOLA! I'M <span className="name">NORMAN KANG</span>, A PRODUCT DESIGNER / FRONT-END DEVELOPER.</h2>
          <img className="gif" src={Arrow} />
          <a id='work'>&nbsp;</a>
          <br />
          <br />
          <br />
          <br />
          
          {/* <span className="work-text">SOME OF MY WORK:</span> */}
          <Projects />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
