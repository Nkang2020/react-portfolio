import React, { Component } from 'react';
import NavBar from './navbar3/nav3';
import './slanguage.css';
import Footer from './footer/footer';
import Img2 from './images/slanguage1.png';
import Img3 from './images/slang-group.jpg';
import Persona from './images/persona.png';
import Desktop from './images/slang-1.png';
import Mobile from './images/slang-mobile.png';
import Current from './images/current.png';
import Future from './images/future.png';
import Logic from './images/slang-logic.png';
import Branding from './images/branding1.png';
import Presentation from './images/presentation.png';
import Prizes from './images/prizes.png';
import Vid1 from './images/slanguage-movie-min.mp4';
import Vid2 from './images/walkthrough.mp4';
import ProjectStart from './project-start/project-start';
import ProjectBoxes from './project-boxes/project-boxes';

// function openCity(evt,cityName) {
//     console.log("s")

//   }

class Slanguage extends Component {
    constructor(props) {
        super(props);
        this.openCity = this.openCity.bind(this);
      }
    openCity(evt,cityName) {
        let i;
        let x = document.getElementsByClassName("tabby");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        // document.getElementById(cityName).style.display = "flex";
        document.getElementById(cityName).style.display = "flex";

        for (i = 0; i < x.length; i++) {
            document.getElementsByClassName("tablink")[i].className = document.getElementsByClassName("tablink")[i].className.replace(" active-1", "");
        }
        if (cityName === "London") {
            document.getElementsByClassName("tablink")[0].className += " active-1";
        } else if (cityName === "Paris") {
            document.getElementsByClassName("tablink")[1].className += " active-1";
        } else if (cityName === "Tokyo") {
            document.getElementsByClassName("tablink")[2].className += " active-1";
        }
        // if (cityName = "Paris") {
        //     document.getElementsByClassName("sub-tab")[1].className += " active";
        // } 

        // document.getElementById(cityName).className += " active";
        // console.log(evt);
        // evt.path[1].className += " active";
      }
  render() {
    return (
      <div className="slang-body"> 
      <div className="App-slang">
        <NavBar />
        <ProjectStart img={Img2}/>
        <ProjectBoxes info={"Winner of ‘Most Original’ at Rehack Hackathon held at Princeton University."} duration={"December 2019 - January 2020"} role={"Product Designer + Developer"} team={"Ketaki Rao - Designer \n Ben Stone - Designer"}/>
        </div>
        <div className="yellow-div">
        <div className="slang-div-2">
          
          <div className="flex-slang">
          <div class="wid45">
          <span className="slang-head-1">A CHROME EXTENSION TO TRANSLATE COLLOQUIAL LANGUAGE</span>
          <span className="text-1">In December 2019, I teamed up with Ben Stone and Ketaki Rao to compete in Rehack, a design hackathon held at Princeton University. The goal was to design a solution and utilize technology to create more meaningful and productive interactions with others.<br/><br/>My team designed Slanguage, a chrome extension which detects and translates slang or colloquial words and phrases for users. <b>Slanguage won the ‘Most Original’ prize.</b> After the competition, I developed Slanguage into a working chrome extension using Javascript.<br/><br/>The end product scans websites for pre-determined slang phrases and adds them into an inbox which the user can choose to save or clear.</span>
          </div>
            
            <video className="group-pic" controls>
                <source src={Vid1} type="video/mp4" />
            </video>
          </div>
        </div>
        </div>

        <div className="hider">
                <div className="tab-bar">
                    <button className="sub-tab tablink active-1" onClick={() => this.openCity(event,'London')}><span className="tab-text">01</span><span className="tab-text-2">IDEATION</span></button>
                    <button className="sub-tab shift-tab tablink" onClick={() => this.openCity(event,'Paris')}><span className="tab-text">02</span><span className="tab-text-2">RESEARCH</span></button>
                    <button className="sub-tab shift-tab tablink" onClick={() => this.openCity(event,'Tokyo')}><span className="tab-text">03</span><span className="tab-text-2">INSIGHTS</span></button>
                  </div>
                <div className="tab-box tabby" id="London">
                    <div className="inside-tab">
                        <span className="tabby-text lh23">Due to the short time span on Rehack, our team had to ideate a solution quickly. Our task was to use technology to create more meaningful and productive interactions in society. As a group, we brainstormed issues that divide society. <b>We honed in on how different languages and cultures create barriers for interactions.</b> Our team focused on designing a live translation system. We understood that there were many existing solutions for translations, such as Google Translate, so we looked at the problem from different perspectives.</span>
                    </div>
                    <div className="inside-tab">
                        <span className="tabby-text lh23">An interesting perspective we found was that of a young foreigner coming to America who learned to speak english in a foreign country. The challenges this individual faced revealed unique pain points.<br/><br/>Many foreigners learn english before arriving to America, but they do not learn slang or colloquial speech. We found that this process occurs slowly during a transitional period. The idea for Slanguage was set, the next phase was to research the value provided and which features to incorporate.</span>
                    </div>
                  </div>
                  <div className="tab-box disnone tabby" id="Paris">
                    <div className="inside-tab">
                        <span className="tabby-text lh23">Ideally, the research phase of a project is a lengthy process of data gathering and analysis. Because of the nature of hackathons, we had a short time limit on the amount of research that could be done. Without hesitation, we set out to find information by doing secondary research and guerilla research to verify assumptions and justify our solution.<br/><br/> We scoured the internet as well as conducted short semi-structured interviews with colleagues and friends to understand the experience of learning informal English. This research produced insights which later informed our design decisions. We positioned Slanguage to solve issues for foreigners transitioning to American culture.</span>
                    </div>
                    <div className="inside-tab">
                        <span className="tabby-text tab-header">QUOTES:<br/><br/></span>
                        <div className="flex">
                            <div className="wid-15">
                                <span className="li-1-1">i</span>
                            </div>
                            <div>
                                <span className="tabby-text"><span>"Why don’t they teach slang in my English class?"</span></span>
                            </div>
                        </div>
                        <br/>
                        <div className="flex">
                            <div className="wid-15">
                                <span className="li-1-1">ii</span>
                            </div>
                            <div>
                                <span className="tabby-text"><span>“I feel left out.”</span></span>
                            </div>
                        </div>
                        <br/>
                        <div className="flex">
                            <div className="wid-15">
                                <span className="li-1-1">iii</span>
                            </div>
                            <div>
                                <span className="tabby-text"><span>“I hate asking for the meaning of slang or further clarification”</span></span>
                            </div>
                        </div>
                        <br/>
                        <div className="flex">
                            <div className="wid-15">
                                <span className="li-1-1">iv</span>
                            </div>
                            <div>
                                <span className="tabby-text"><span>“I feel stupid when I don’t get a joke because of the slang.”</span></span>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="tab-box disnone tabby" id="Tokyo">
                    <div class="goal-main-div">
                    <div class="goal-outter">
                            <div className="goal-number-div">
                                <span className="goal-number">&rarr;</span>     
                            </div>
                            <div className="goal-text-div">
                                <span className="goal-title">There is a gap between English taught in classes and English used in informal settings.</span>
                            </div>
                    </div>
                    <div class="goal-outter">
                            <div className="goal-number-div">
                                <span className="goal-number">&rarr;</span>     
                            </div>
                            <div className="goal-text-div">
                                <span className="goal-title">Slang or colloquial language is learned by asking others.</span>
                            </div>
                    </div>
                    <div class="goal-outter">
                            <div className="goal-number-div">
                                <span className="goal-number">&rarr;</span>     
                            </div>
                            <div className="goal-text-div">
                                <span className="goal-title">People feel isolated or stupid when they miss a joke due to not understanding slang.</span>
                            </div>
                    </div>
                    <div class="goal-outter2">
                            <div className="goal-number-div">
                                <span className="goal-number">&rarr;</span>     
                            </div>
                            <div className="goal-text-div">
                                <span className="goal-title">People do not like to pause the conversation to ask for definitions or clarification, especially in group settings.</span>
                            </div>
                    </div>  
                    </div>
                  </div>
                  </div>
                <div className="hider-2">
                  <div className="dota-div mbot25"><span className="tab-text">01</span><span className="tab-text-2">IDEATION</span></div>
                    <div className="inside-tab">
                        <span className="tabby-text lh23">Due to the short time span on Rehack, our team had to ideate a solution quickly. Our task was to use technology to create more meaningful and productive interactions in society. As a group, we brainstormed issues that divide society. <b>We honed in on how different languages and cultures create barriers for interactions.</b> Ben Stone proposed a we design a live translation system. We understood that there were many existing solutions for translations, such as Google Translate, so we looked at the problem from different perspectives.</span>
                    </div>
                    <div className="inside-tab">
                        <span className="tabby-text lh23">An interesting perspective we found was that of a young foreigner coming to America who learned to speak english in a foreign country. The challenges this individual faced revealed unique pain points.<br/><br/>Many foreigners learn english before arriving to America, but they do not learn slang or colloquial speech. We found that this process occurs slowly during a transitional period. The idea for Slanguage was set, the next phase was to research the value provided and which features to incorporate.</span>
                    </div>
                  
                    <div className="dota-div mbot25 mtop50"><span className="tab-text">02</span><span className="tab-text-2">RESEARCH</span></div>
                    <div className="inside-tab">
                        <span className="tabby-text lh23">Ideally, the research phase of a project is a lengthy process of data gathering and analysis. Because of the nature of hackathons, we had a short time limit on the amount of research that could be done. Without hesitation, we set out to find information by doing secondary research and guerilla research to verify assumptions and justify our solution.<br/><br/> We scoured the internet as well as conducted short semi-structured interviews with colleagues and friends to understand the experience of learning informal English. This research produced insights which later informed our design decisions. We positioned Slanguage to solve issues for foreigners transitioning to American culture.</span>
                    </div>
                    <div className="inside-tab mtop25">
                        <span className="tabby-text lh23 tab-header">Quotes that stood out:<br/><br/></span>
                        <div className="flex">
                            <div className="wid-15">
                                <span className="li-1-1">i</span>
                            </div>
                            <div>
                                <span className="tabby-text lh23"><span>"Why don’t they teach slang in my English class?"</span></span>
                            </div>
                        </div>
                        <br/>
                        <div className="flex">
                            <div className="wid-15">
                                <span className="li-1-1">ii</span>
                            </div>
                            <div>
                                <span className="tabby-text lh23"><span>“I feel left out.”</span></span>
                            </div>
                        </div>
                        <br/>
                        <div className="flex">
                            <div className="wid-15">
                                <span className="li-1-1">iii</span>
                            </div>
                            <div>
                                <span className="tabby-text lh23"><span>“I hate asking for the meaning of slang or further clarification”</span></span>
                            </div>
                        </div>
                        <br/>
                        <div className="flex">
                            <div className="wid-15">
                                <span className="li-1-1">iv</span>
                            </div>
                            <div>
                                <span className="tabby-text lh23"><span>“I feel stupid when I don’t get a joke because of the slang.”</span></span>
                            </div>
                        </div>
                    </div>
                  
                    <div className="dota-div mtop50"><span className="tab-text">03</span><span className="tab-text-2">INSIGHTS</span></div>
                    <div class="goal-main-div mtop25">
                    <div class="goal-outter">
                            <div className="goal-number-div">
                                <span className="goal-number">01</span>     
                            </div>
                            <div className="goal-text-div">
                                <span className="goal-title lh23">There is a gap between English taught in classes and English used in informal settings.</span>
                            </div>
                    </div>
                    <div class="goal-outter">
                            <div className="goal-number-div">
                                <span className="goal-number">02</span>     
                            </div>
                            <div className="goal-text-div">
                                <span className="goal-title lh23">Slang or colloquial language is learned by asking others.</span>
                            </div>
                    </div>
                    <div class="goal-outter">
                            <div className="goal-number-div">
                                <span className="goal-number">03</span>     
                            </div>
                            <div className="goal-text-div">
                                <span className="goal-title lh23">People feel isolated or stupid when they miss a joke due to not understanding slang.</span>
                            </div>
                    </div>
                    <div class="goal-outter2">
                            <div className="goal-number-div">
                                <span className="goal-number">04</span>     
                            </div>
                            <div className="goal-text-div">
                                <span className="goal-title lh23">People do not like to pause the conversation to ask for definitions or clarification, especially in group settings.</span>
                            </div>
                    </div>  
                    </div>
                    </div>
                  
                  <div className="yellow-bar"></div>
                  <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">DESIGN</span>
                  <span className="lh23">With the idea and insights formed, we moved on to determine the features that Slanguage would provide. In order to understand which features were important, we took the perspective of a international student named ‘Armin’. We developed a persona around Armin to understand user needs and justify design decisions.</span>
                  </div>
                  <img className="persona" src={Persona} />
                  <div className="morewid mauto mtop150">
                  <span className="lh23 fsize20 sub-header">CURRENT / FUTURE STATE ANALYSIS</span>
                  <span className="lh23">To further empathize with our users, we used future state analysis to understand the current user’s environment and pain points. We imagined a situation where ‘Armin’ is watching American media with friends and a slang phrase is used.</span>
                  </div>
                  <div className="flex-slang">
                      <div>
                      <p className="random-head">Current State</p>
                          <img className="img-4" src={Current} />
                        <p className="card-text lh23">Armin feels left out and confused when watching American media with friends.</p>
                      </div>
                      <div>
                      <p className="random-head">Future State</p>
                          <img className="img-4" src={Future} />
                        <p className="card-text lh23">With Slanguage, Armin gets live translations and can enjoy American media with friends.</p>
                      </div>
                  </div>


                  <div class="flex-div mtop150">
                    <div className="morewid2">
                    <span className="lh23 fsize20 sub-header">VISUAL DESIGN</span>
                  <span className="lh23">After we determined the pain points and our proposed design solutions, we were ready to discuss the foundational elements of visual design. Our solution is geared towards young adults so we wanted to keep the tone fun and novel by using bright tones but also keep a trustworthy feel by using solid design principles and colors. Furthermore, the nature of slang is fun and young while the translation aspect needs to represent quality and trust. This duality informed our logo design and more. We utilized moodboards to inspire a style guide and the feel of the product that is playful yet reliable.</span>
                        </div>
                        {/* <div className="pic-compare-div">
                            <p className="box-header">MOBILE FEATURE</p>
                            <span class="text-p lh23">Our proposed solution is to include a sister phone application which connects to the translation inbox of the computer and the phone. With this, we would include group mode, which when activated sends live notifications to the phone.<br/><br/>This would allow users to receive live translation notifications discreetly while watching netflix or youtube with others.</span>
                        </div> */}
                        <img className="img-3" src={Branding} />
                    </div>

                    <div class="flex-div mtop150">
                        <div className="morewid mauto">
                  <span className="lh23 fsize20 sub-header">DESKTOP FEATURE</span>
                  <span className="lh23">The main feature of Slanguage is a desktop chrome extension. Web pages, applications or videos are actively scanned for slang words and the translation is added to an inbox for the user to check at their convenience. Translations can then be starred or dismissed. Users can also opt for live translation notifications to appear on the top right screen.</span>
                  </div>
                    </div>
                    <img className="img-2" src={Desktop} />
                    <p className="halfwid fsize20 lh23 mid-text italic">How might we provide foreigners with live slang translations without disrupting the experience for others?</p>
                    <div class="flex-div mtop40">
                        <span className="morewid mauto lh23">American tv shows and movies contain a lot of slang language, making watching it a difficult experience for foreigners especially when with friends because they must either stop the flow of the video and ask for the translation or feel left out and confused. Furthermore, our base solution of providing live notifications to the computer may detract from others’ viewing experience.</span>
                    </div>
                    <div class="flex-div mtop150">
                    <div className="morewid2">
                    <span className="lh23 fsize20 sub-header">MOBILE FEATURE</span>
                  <span className="lh23">Our design solution is to include a sister phone application which connects to the translation inbox of the computer and the phone. With this, we would include group mode, which when activated sends live notifications to the phone. This would allow users to receive live translation notifications discreetly while watching netflix or youtube with others.</span>
                        </div>
                        <img className="img-3" src={Mobile} />
                    </div>
                  </div>
                  <div class="flex-div mobile-fix">
                        <div className="morewid mtop150 mauto">
                  <span className="lh23 fsize20 sub-header">PRESENTATION AND AWARDS</span>
                  <span className="lh23">We presented our ideas and design decisions at Rehack. After introducing the problem space, the presentation’s structure followed ‘Armin’ as a user study and focused on how our design solutions provided direct value to the user. Furthermore, we clearly laid out the advantages of our solution:</span>
                  <br/>
                  <br/>
                  <ul>
                    <li><b>Feasible:</b> It is a browser plugin(not very difficult to implement) that checks subtitles and does not require voice recognition algorithms.</li>
                    <br/>
                    <li><b>Original:</b> There currently is not a solution for this problem space.</li>
                    <br/>
                    <li><b>Impactable:</b> Boosts social interaction between people who previously didn’t understand these slang terms and peers thereby maintaining their self confidence.</li>
                    <br/>
                    <li><b>Scalable:</b> Could be expanded to other languages, social media platforms and chat applications. Also could be used in e-learning tools.</li>
                  </ul>
                  <br/>
                  <span className="lh23">Slanguage was the winner of the 'Most Original' award.  Because of this, The team won some cool prizes!</span>
                  
                  
                  </div>
                    </div>
                    <div className="flex-slang-3">
                  <img className="img-5" src={Presentation} />
                  <img className="img-5 img-5-push" src={Prizes} />
                  </div>
                  
                  {/* <div class="flex-div mobile-fix mtop150">
                        <div className="morewid mauto">
                  <span className="lh23 fsize20 sub-header">MOVING FORWARD</span>
                  <span className="lh23">If we had more time, we would want to gather more data, test assumptions and design decisions in a more robust manner and add more features. To begin with, during the research phase, more generative research could be accomplished by conducting semi-structured interviews of foreigners who moved to the US. These data points would be analyzed using affinity mapping to uncover hidden problem spaces and user sentiments. Finally, it would be beneficial to conduct concept validation using storyboards with users to understand how our mental models align with the user mental models. These tasks would allow us to better understand the user and justify design decisions and uncover more useful potential features.</span>
                  </div>
                  
                    </div> */}
                    <p className="motto">"For the first time, <b><i>you don't need to ask to be in the know</i></b>"</p>
                    <div className="morewid mauto mtop150 mobile-fix">
                  <span className="slang-head-2">DEVELOPMENT</span>
                  <span className="lh23">After the hackathon, I decided to develop Slanguage into a working chrome extension as a personal project. I used Javascript to build Slanguage. Whenever I start a development project, I break the project down into logic pieces. The first step was to use Javascript to scan the current webpage for predetermined slang words or phrases. Once the program detects slang, it would populate the extension inbox with the data. This must also trigger a notification to the user.</span>
                  </div>
                  <div className="develop-div">
                  
                      
                      <div className="">
                      <p className="halfwid fsize20 lh23 mid-text tcenter">Code Logic Diagram</p>
                      <img className="img-6" src={Logic} />
                      
                      </div>

                  <div className="flex-slang-2 mtop120">
                      <span className="halfwid lh23">As the inbox populates, the data needed to be stored. In order to store the data, I utilized the browser local storage. There the data of the encountered slang phrases is collected. The user can dismiss encountered words in the inbox but the data persists in the local storage so as to not repopulate the same slang. The logic that made this possible was to create a seperate viewing bank so that it would only display slang that the user had not dismissed.<br/><br/>The overall process of developing Slanguage was extremely rewarding. It was great to come full circle and see our project completed and usable! I aim to place it in the google store for free in hopes to help others learn Slang!</span>
                      <video className="group-pic" controls>
                      <source src={Vid2} type="video/mp4" />
                  </video>
                  </div>
                  </div>
        <div class="maxw">
        <Footer />
        </div>
      
      </div>
    );
  }
}




export default Slanguage;
