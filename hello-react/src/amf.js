import React, { Component } from 'react';
import NavBar from './navbar3/nav3';
import './amf.css';
import I1 from './images/amf1.png';
import Footer from './footer/footer';
import ProjectStart from './project-start/project-start';
import ProjectBoxes from './project-boxes/project-boxes';




class Amf extends Component {
  render() {
    return (
      <div className="slang-body"> 
      <div className="App-slang">
        <NavBar />
        <ProjectStart desc="Blank" img={I1}/>
        <ProjectBoxes info={"A solution to enhance the service capabilities of Markel Food Group."} duration={"October 2019 - November 2019"} role={"Product Designer"} team={"Bennett Huffman - Designer \n Katie Johnstone - Designer \n June Kim - Designer"}/>
        </div>
        <div className="yellow-div-2">
        <div className="slang-div-2-bloom">
          
          <div className="flex-slang">
          <div class="wid45 bloom-divy">
            <span className="slang-head-1">A NATIVE APPLICATION FOR MACHINE MONITORING AND ISSUE REPORTING</span>
            <span className="text-1">As technological demands accelerate, data science and machine learning have begun to play an increasingly important role at Bloomberg. Machine learning is being applied to nearly every facet of the business – from data acquisition through analysis, to real-time news alerts and story generation. However, applying machine learning at scale has created friction around experiment management, thus driving the need to manage some of this complexity.<br/><br/>Our goal is to design a platform for managing machine learning experiments and enhance both reproducibility and knowledge sharing to simplify the model training process, allowing for higher success rates of experiments and the delivery of increasingly sophisticated products powered by machine learning.<br/><br/>Check out the custom coded project website I developed and helped design.</span>
            <a className="aremove" href="https://bloomineers.com/" target="_blank"><button className="button-1">View Project Website</button></a>
          </div>
          {/* <img className="wid45 b-fix" src={Img2} /> */}
          </div>
        </div>
        </div>
                  <div class="maxw">
        <Footer />
        </div>
        
      
      </div>
    );
  }
}




export default Amf;
