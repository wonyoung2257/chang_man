import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/View/LandingPage/LandingPage";
import Signup from "./Components/View/Signup/Signup";
import Login from "./Components/View/Login/Login";
import "./App.css";
import After from "./Components/View/After/After";
import Update from "./Components/View/Update/Update";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/Main">
              <LandingPage />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/After">
              <After />
            </Route>
            <Route path="/Update">
              <Update />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
