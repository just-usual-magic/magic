import * as React from "react";
import "./App.css";
import Welcome from './components/welcome/Welcome';
import ChooseOption from './components/chooseOption/ChooseOption';
import Submit from './components/submit/Submit'
import Suggestion from './components/suggestion/Suggestion'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <div className="centeredContainer">
      <Router>
              <Switch>
                <Route path="/submit">
                  <Submit />
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