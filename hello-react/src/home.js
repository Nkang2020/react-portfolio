import React, { Component } from 'react';
import NavBar from './navbar/nav';
import './home.css';
import Projects from './projects/projects';
import Footer from './footer/footer'
import Arrow from './images/arrow-sm.gif';
import Wdslang from './images/wd-slangy.png';
import Wdbloom from './images/wd-bloomineers.png';
import Wdninja from './images/wd-ninja.png';
import Wdcali from './images/wdcali.png';
import Wdavalyn from './images/wdavalyn.png';
import Wdgot from './images/wdgot2.png';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <NavBar />
        <div className="vhdiv">
          <h2 className="intro">HOLA! I'M <span className="name">NORMAN KANG</span>, A PRODUCT DESIGNER / FRONT-END DEVELOPER.</h2>
          <img className="gif" src={Arrow} />
          <a id='work'>&nbsp;</a>   
          </div>
                 
          <Projects />
          <p className="devtext">WEB DEV PROJECTS</p>
          <div className="devproj">
            <a className="devproj-link" target="_blank" href="https://bloomineers.com/">
            <div className="devproj-in-1">
            <img className="wd-slang-pic shadow" src={Wdbloom} />
            </div>
            </a>
            <a className="devproj-link" target="_blank" href="https://github.com/Nkang2020/slanguage">
            <div className="devproj-in-2">
            <img className="wd-slang-pic" src={Wdslang} />
            </div>
            </a>
            <a className="devproj-link" target="_blank" href="https://soundboardninja.firebaseapp.com/index.html">
            <div className="devproj-in-3 devproj-fix">
            <img className="wd-slang-pic shadow" src={Wdninja} />
            </div>
            </a>
            <a className="devproj-link" target="_blank" href="https://nkang2020.github.io/chart-portfolio/">
            <div className="devproj-in-4">
            <img className="wd-slang-pic shadow" src={Wdgot} />
            </div>
            </a>
            <a className="devproj-link" target="_blank" href="https://cryptic-mountain-83087.herokuapp.com/calisthenics">
            <div className="devproj-in-5">
              <img className="wd-slang-pic shadow" src={Wdcali} />
            </div>
            </a>
            <a className="devproj-link" target="_blank" href="https://www.avalynpharma.com/">
            <div className="devproj-in-6">
            <img className="wd-slang-pic shadow" src={Wdavalyn} />
            </div>
            </a>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;









// import React, { Component } from 'react';
// import NavBar from './navbar/nav';
// import './home.css';
// import Projects from './projects/projects';
// import Footer from './footer/footer'
// import Arrow from './images/arrow-sm.gif';

// class Home extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//         <NavBar />
//           <h2 className="intro">HOLA! I'M <span className="name">NORMAN KANG</span>, A PRODUCT DESIGNER / FRONT-END DEVELOPER.</h2>
//           <img className="gif" src={Arrow} />
//           <a id='work'>&nbsp;</a>
//           <br />
//           <br />
//           <br />
//           <br />
          
//           {/* <span className="work-text">SOME OF MY WORK:</span> */}
//           <Projects />
//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;
