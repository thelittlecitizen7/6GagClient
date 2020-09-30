import React, { useState } from 'react';
import Gag from '../gag/gag';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

var GagList = (props) => {

    const history = useHistory();
    
    var onGagClick = (gag) => {
        console.log(gag.id)
        
        history.push({
            pathname:'/gags/' + gag.id
        })
    }

   

    var rednerAllGags = () => {
        var gags = props.gags;
        console.log(3)
        var htmlGags = gags.map((gag,index) => {
            return (
                <div>
                    <Col key={index} md={4} className="text-center">
                        <Gag  Title={gag.title} Text={gag.text} img={gag.img}  onClickHandler={() => {onGagClick(gag)}}/>
                    </Col>
                </div>
                )
        })

        return (
            htmlGags
        )
    }
    return (
        <div>
            <Row className="justify-content-md-center border border-dark">
                {rednerAllGags()}
            </Row>
        </div>
    )
}

export default GagList;