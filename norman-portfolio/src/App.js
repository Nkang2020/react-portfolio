import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from './navbar/nav';
import Projects from './projects/projects';
import Footer from './footer/footer';
import About from './about';
import Home from './home';
import Slanguage from './slanguage';
import Bloomberg from './bloomberg';
import Amf from './amf';


class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/slanguage">
          <Slanguage />
        </Route>
        <Route exact path="/bloomberg">
          <Bloomberg />
        </Route>
        <Route exact path="/amf">
          <Amf />
        </Route>
        <Redirect to="/" />
      </Switch>
      </div>
    );
  }
}



export default App;
