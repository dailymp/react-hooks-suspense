import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import './App.css';
import DemoOne from "./demos/one";
import DemoTwo from "./demos/two";
import DemoThree from "./demos/three";
import DemoFour from "./demos/four";
import DemoFive from "./demos/five";
import DemoSix from "./demos/six";
import DemoSeven from "./demos/seven";
import DemoEight from "./demos/eight";
import DemoNine from "./demos/nine";

import Start from "./LiveSearchClass/index";
import StepOne from "./LiveSearchClass/stepOne";
import StepTwo from "./LiveSearchClass/stepTwo";
import StepThree from "./LiveSearchClass/stepThree";
import StepFour from "./LiveSearchClass/stepFour";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div style={{padding: '10px', zoom: 1.5}}>
                <nav>
                    <Link style={{paddingRight: '10px'}} to="/start">Start</Link>
                    <Link style={{paddingRight: '10px'}} to="/stepone">Step One</Link>
                    <Link style={{paddingRight: '10px'}} to="/steptwo">Step Two</Link>
                    <Link style={{paddingRight: '10px'}} to="/stepthree">Step Three</Link>
                    <Link style={{paddingRight: '10px'}} to="/stepfour">Step Four</Link>
                </nav>
                <nav>
                    <Link style={{paddingRight: '10px', opacity: .1}} to="/one">Demo One</Link>
                    <Link style={{paddingRight: '10px', opacity: .1}} to="/two">Demo Two</Link>
                    <Link style={{paddingRight: '10px', opacity: .1}} to="/three">Demo Three</Link>
                    <Link style={{paddingRight: '10px', opacity: .1}} to="/four">Demo Four</Link>
                    <Link style={{paddingRight: '10px', opacity: .1}} to="/five">Demo Five</Link>
                    <Link style={{paddingRight: '10px'}} to="/six">Demo Six</Link>
                    <Link style={{paddingRight: '10px'}} to="/seven">Demo Seven</Link>
                    <Link style={{paddingRight: '10px', opacity: .1}} to="/eight">Demo Eight</Link>
                    <Link style={{paddingRight: '10px'}} to="/nine">Demo Nine</Link>
                </nav>
                <Router>
                    <Start path="/start" />
                    <StepOne path="/stepone" />
                    <StepTwo path="/steptwo" />
                    <StepThree path="/stepthree" />
                    <StepFour path="/stepfour" />
                    <DemoOne path="/one" />
                    <DemoTwo path="/two" />
                    <DemoThree path="/three" />
                    <DemoFour path="/four" />
                    <DemoFive path="/five" />
                    <DemoSix path="/six" />
                    <DemoSeven path="/seven" />
                    <DemoEight path="/eight" />
                    <DemoNine path="/nine" />
                </Router>
            </div>
        </Provider>
    );
  }
}

export default App;
