import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import GagBoard from "../gagBoard/gagBoard";
import GagPage from "../gagPage/gagPage";
import GagInserterPage from "../gagInserter/gagInserter"
import Login from '../login/login'



var NavigatorBar = (props) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addGag">Create Gag</Link>
            </li>
            <li >
              {/* <a onClick={() => {
                localStorage.setItem("name",undefined)
                props.setName(undefined);
                 return (<Login/>)
                }}>Logout</a> */}
              <Link >Logout</Link>
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
        <Route path="/addGag">
          <GagInserterPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default NavigatorBar;