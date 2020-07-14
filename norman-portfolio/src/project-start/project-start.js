import React, { Component } from 'react';
import './project-start.css';

class ProjectStart extends Component {
  render() {
    return (
        <div>
            <img className="banner-pic" src={this.props.img} />
            <span className="head2">{this.props.desc}</span>
        </div>
    );
  }
}

export default ProjectStart;
