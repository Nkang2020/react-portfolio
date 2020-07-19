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
        <div className="about-text lh23">
          <p>Hi! I’m Norman, a Korean-American product designer living in Cupertino, CA. I love all things animated, the outdoors and practicing martial arts. These days, you can find me reading historical non-fiction, jogging with my dog or doodling and re-imagining the world.<br/><br/>My journey began at The University of California, San Diego. There I found an interest and talent in Biochemistry. I graduated with a B.S in Biochemistry/Chemistry and worked as a Production Biochemist afterwards. My background in Biochemistry provided me with complex problem solving skills and an analytical mindset that I bring with me to all my future endeavors.<br/><br/>During my time as a Biochemist, I found a passion for web development. This is when I started learning Front-end development in my free time. I was fortunate to be able to work for PINT, inc. as a Front-end developer and technical support engineer. There I was able to hone in on technical skills and further narrow down what I truly loved to do. I found myself drawn to the design process. In particular, researching user experience to inform design decisions.<br/><br/>In 2019, I was accepted into Carnegie Mellon University’s Master of Human-Computer Interaction program. There I would meet talented individuals with the same passion and develop product design skills and thinking. Currently, I am working on the MHCI Capstone project with Bloomberg to design a Machine Learning platform to better manage experiments.</p>
        </div>
        </div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default About;
