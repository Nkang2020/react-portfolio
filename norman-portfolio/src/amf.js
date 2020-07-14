import React, { Component } from 'react';
import NavBar from './navbar3/nav3';
import './amf.css';
import I1 from './images/amf1.png';
import I2 from './images/amf2.png';
import I3 from './images/amf3.png';
import I4 from './images/amf4.svg';
import I5 from './images/amf5.svg';
import I6 from './images/amf6.jpeg';
import I7 from './images/amf7.png';
import I8 from './images/amf8.png';
import I9 from './images/amf9.png';
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
        <div className="yellow-div-3">
        <div className="slang-div-2-bloom">
          
          <div className="flex-slang">
          <div class="wid45 bloom-divy">
            <span className="slang-head-1 bb">A NATIVE APPLICATION FOR MACHINE MONITORING AND ISSUE REPORTING</span>
            <span className="text-1 bb">Our team was tasked with creating a native mobile application to enhance the service capabilities of Markel Food Group. The application needed to fit with the business’ current offering and harness the capabilities of a mobile phone.<br/><br/>We designed AMFSupport. A machine monitoring and issue reporting application specifically designed to provide value to AMF Bakeries, a subsidiary of Markel Food group, and the customer. 
</span>
            <a className="aremove" href="https://tinyurl.com/amfsupport" target="_blank"><button className="button-1 bb bb-border">View Prototype</button></a>
          </div>
          <img className="wid45 b-fix" src={I2} />
          </div>
        </div>
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">HI-FI USERFLOW</span>
                  <span className="lh23">High Fidelity prototypes depicting how a user can report a custom or automatically detected issue to AMF Bakeries.</span>
                  </div>
                  <img className="img5" src={I3} />

                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">DOMAIN RESEARCH</span>
                  <span className="lh23">Our team began by unpacking the various subsidiaries of Markel Food Group, including baking and food packaging machinery manufacturers across the US and Europe. We honed our focus on <b>AMF</b>, Markel’s largest and most visible subsidiary with the most refined digital presence. </span>
                  </div>
                  <img className="img5 shadow" src={I4} />

                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">STAKEHOLDER RESEARCH</span>
                  <span className="lh23">To survey the needs our app would address, we mapped the stakeholders in AMF’s ecosystem. We honed in on the needs of wholesale bakeries. Based on the <a className="link-amf" target="_blank" href="https://higherlogicdownload.s3.amazonaws.com/RETAILBAKERSOFAMERICA/97ac63b2-d4f2-4f60-9c8a-a904b93d7a4a/UploadedImages/Commercial_Bakeries_Analysis_2017.pdf">State of Commercial Bakeries report</a>, we discovered their costs are challenging to manage with slim margins, rising benefits and labor costs. Reduction of packaging, energy efficiency, and downtime management can help reduce costs.</span>
                  </div>
                  <img className="img5" src={I5} />

                  <span className="slang-head-2 fix-m">IDEATION</span>
                  <div className="amf-flex">
                    <div className="amf-flex-in">
                      <span className="lh23 fsize20-2 sub-header">ASSUMPTION</span>
                      <span className="bold fsize18">Customer support can find better/easier ways to respond to customers</span>
                      <span className="lh23">We used reverse assumptions as a method to ideate nonobvious solutions. We found that there were many opportunities to add value, with some being more realistic or valuable to stakeholders than others. Our final decision to focus on making customer support proactive rather than reactive was based on providing the greatest value for the customers and AMF Bakeries while allowing for a realistic mobile application.</span>
                    </div>
                    <div className="amf-flex-in flex-in-3">
                      <span className="lh23 fsize20-2 sub-header">REVERSE ASSUMPTION</span>
                      <span className="bold fsize18">Customer support is proactive rather than reactive</span>
                      <img className="amf-img-1" src={I6} />
                    </div>
                  </div>
                  
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">LO-FI DESIGN</span>
                  <span className="lh23">The lo-fi phase, from sketches to greyscale mockups, helped us further develop a sense of the needs of bakery managers and the data AMF would provide them.<br/><br/>While our first wireframes focused on individual screens, later iterations built out user flows and relationships between screens.</span>
                  </div>
                  <img className="img5" src={I7} />

                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">MID-FI DESIGN</span>
                  <span className="lh23">In an effort to realign the app with our priority to allow bakeries to have a more direct line to customer support, we narrowed our app’s primary focus from machine monitoring and reporting to just issue reporting. A mantra we kept in mind was ‘do one thing well’, and other successes will follow.<br/><br/>As a result, we developed a means of directly reporting an issue or filing a maintenance request from the home screen (the lower right ‘plus’ icon), as well as through the diagnostic flow.<br/><br/>For our hi-fi prototype, we planned to finalize our design by implementing a complete color scheme and micro-interactions, such as an animated loading screen, to create a stronger sense of branding.</span>
                  </div>
                  <img className="img5" src={I8} />

                  <div className="amf-flex vert mtop150">
                    <div className="amf-flex-in">
                      <span className="lh23 fsize20-2 sub-header">BRAND</span>
                      <span className="lh23">We chose a color palette that utilized AMF’s existing products with the bright red, white, and black, but fused in a more modern blue tone and choice of typography due to its connotation with safety and trust given this product’s focus on customer support.</span>
                      <span className="lh23 fsize20-2 sub-header mtop50">VOICE</span>
                      <span className="lh23">We chose a color palette that utilized AMF’s existing products with the bright red, white, and black, but fused in a more modern blue tone and choice of typography due to its connotation with safety and trust given this product’s focus on customer support.</span>

                    </div>
                    <div className="amf-flex-in">
                      <img className="amf-img-1 shadow flex-in-3" src={I9} />
                    </div>
                  </div>

                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">MICRO-INTERACTIONS</span>
                  <span className="lh23">Micro-interactions were added to AMFSupport to smooth transitions, add delight, and reduce cognitive load. The end goal was to create a more welcoming and engaging experience. As a team, we discussed the balance between adding too many or too little micro-interactions. And so, we finalized a list of micro-interactions added into the application:</span>
                  <ol className="newol">
                    <li className="microint">Homepage loading animation</li>
                    <li className="microint">Transition loading of modules</li>
                    <li className="microint">Sliding screens</li>
                    <li className="microint">Easy to understand notifications</li>
                    <li className="microint">Progressive disclosure</li>
                    </ol>
                  </div>

                  
                  
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">VALUE GENERATED</span>
                  <span className="lh23">By making the process of discovering and reporting issues simpler, we provided value to both AMF Bakeries and the customer.</span>
                  </div>
                  <div className="amf-flex-2 mtop50">
                    <div className="amf-flex-in-2">
                      <span className="lh23 fsize20-2 sub-header">AMF Bakeries:</span>
                      <ol>
                      <li className="microint">Homepage loading animation</li>
                      <li className="microint">Transition loading of modules</li>
                      <li className="microint">Sliding screens</li>
                      <li className="microint">Easy to understand notifications</li>
                      <li className="microint">Progressive disclosure</li>
                      </ol>
                    </div>
                    <div className="amf-flex-in-2 amf-flex-in-2-push">
                      <span className="lh23 fsize20-2 sub-header">Customers:</span>
                      <ol>
                      <li className="microint">Homepage loading animation</li>
                      <li className="microint">Transition loading of modules</li>
                      <li className="microint">Sliding screens</li>
                      <li className="microint">Easy to understand notifications</li>
                      <li className="microint">Progressive disclosure</li>
                      </ol>
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
