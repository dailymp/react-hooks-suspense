import React, { Component } from 'react';
import { Router, Link } from "@reach/router"
import './App.css';
import DemoOne from "./demos/one";
import DemoTwo from "./demos/two";
import DemoThree from "./demos/three";
import DemoFour from "./demos/four";

class App extends Component {
  render() {
    return (
        <div>
            <nav>
                <Link to="/one"> - Demo One - </Link>
                <Link to="/two"> -Demo Two - </Link>
                <Link to="/three"> - Demo Three - </Link>
                <Link to="/four"> - Demo Four - </Link>
            </nav>
            <Router>
              <DemoOne path="/one" />
              <DemoTwo path="/two" />
              <DemoThree path="/three" />
              <DemoFour path="/four"/>
            </Router>
        </div>
    );
  }
}

export default App;
