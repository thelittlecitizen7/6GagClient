import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Row,Col} from 'react-bootstrap'
import GagBoard from "../gagBoard/gagBoard";
import GagPage from "../gagPage/gagPage";
import GagInserterPage from "../gagInserter/gagInserter"
import Login from '../login/login'
import {Nav} from 'react-bootstrap'
import "./navBarStyles.css"
import profilePic from '../../imgs/profilePic.png'


var NavigatorBar = (props) => {
  return (
    <Router>
      <div>
        <Row id="navBar">
          <Col md={10}>
            <Nav defaultActiveKey="/" >
              <Nav.Item>
                <Nav.Link href="/"><h4 className="linkText">Home</h4></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/addGag"><h4 className="linkText">Create gag</h4></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={2} className="text-center">
              <img  src={profilePic} class="rounded-circle mr-3" height="50px" width="70px" alt="Card image cap"></img>
              <h4>{localStorage.getItem("name")}</h4>
            
          </Col>
        </Row>
      
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
      </div>
    </Router>
  );
}

export default NavigatorBar;