import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gag from "../gag/gag";
import GagBoard from "../gagBoard/gagBoard";
import GagPage from "../gagPage/gagPage";

var  NavigatorBar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <GagBoard />
        </Route>
        <Route path="/gags/:id">
          <GagPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default NavigatorBar;