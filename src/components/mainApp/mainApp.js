import React from 'react'
import { Card, Container,Row,Col } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import NavigatorBar from '../bar/navBar'
import GagBoard from '../gagBoard/gagBoard'


var MainApp = (props) => {
    return (
        <div>
             <NavigatorBar setName={props.setName}/>    
        </div>
    )
}

export default MainApp;