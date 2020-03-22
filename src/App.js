import * as React from "react";
import "./App.css";
import ChooseOption from './components/chooseOption/ChooseOption';
import Submit from './components/submit/Submit'
import Thanks from './components/thankYou/Thanks'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>CovidRoulette</h1>
        <h2>Nice things you can do during shutdown</h2>
      </div>
      
      <div className="centeredContainer">
      <Router>
              <Switch>
                <Route path="/submit">
                  <Submit />
                </Route>
                <Route path="/thanks">
                  <Thanks />
                </Route>
                <Route path="/">
                  <ChooseOption />
                </Route>
              </Switch>
          </Router>
      </div>
    </div>
  );
}