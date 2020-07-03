import React, { Component } from 'react';
import NavBar from './navbar2/nav2';
import './about.css';
import Footer from './footer/footer';
import Img from './images/about-pic-bl.png';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <NavBar />
        <div className="flexy">
          <div>
        <img className="about-pic" src={Img} />
        </div>
        <div className="about-text">
          <p>I am a Korean American who was born in Michigan. I grew up in Cupertino, CA where I spent much of my youth playing sports and reading comic books. When I was younger, I would love to doodle and create new characters. Some of my favorite characters are Garfield, Zell from Final Fantasy and Ryu from Streetfighter. These days I still love doodling and re-imagining the world.<br/><br/>After high school, I attended The University of California, San Diego. There I found my interest and talent in Biochemistry. I graduated with a B.S in Biochemistry/Chemistry and worked as a Production Biochemist afterwards. My favorite subject was Organic Chemistry as I found it to be almost like a game to think about how electrons move from structure to structure. My background in Biochemistry provided me with complex problem solving skills and an analytical mindset that I bring with me to all my future endeavors.<br/><br/>During my endeavors as a Biochemist, I found a passion for web development. This is when I started learning Front-end development on my free time. I was fortunate to be able to work for PINT, inc. as a Front-end developer and technical support engineer. There I was able to hone in on technical skills and further narrow down what I truly loved to do. I found myself drawn to the design process. In particular the design and philosophies behind the design that went into each product.<br/><br/>In 2019, I was accepted into Carnegie Mellon University’s Master of Human-Computer Interaction program. There I would meet talented individuals with the same passion and develop product design skills and thinking. Currently, I am working on the MHCI Capstone project with Bloomberg to design a Machine Learning platform to better manage experiments.</p>
        </div>
        </div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default About;
