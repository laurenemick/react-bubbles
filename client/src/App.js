import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/protected' component={BubblePage} />
          <Route exact path="/" component={Login} />{" "}
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
