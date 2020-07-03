import React from "react";
import Slider from "react-slick";
import Slide1 from './images/domain1.png';
import Slide2 from './images/domain2.png';
import Slide3 from './images/domain3.png';
import Slide4 from './images/domain4.png';
import Slide5 from './images/domain5.png';
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
        <img className="slides shadow" src={Slide1} />
        </div>
        <div>
        <img className="slides shadow" src={Slide2} />
        </div>
        <div>
        <img className="slides shadow" src={Slide3} />
        </div>
        <div>
        <img className="slides shadow" src={Slide4} />
        </div>
        <div>
        <img className="slides shadow" src={Slide5} />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
