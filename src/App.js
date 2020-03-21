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
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Router>
            <div>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/option">
                  <ChooseOption />
                </Route>
                <Route path="/submit">
                  <Submit />
                </Route>
                <Route path="/suggestion">
                  <Suggestion />
                </Route>
                <Route path="/">
                  <Welcome />
                </Route>
              </Switch>
            </div>
          </Router>
    </div>
  );
}