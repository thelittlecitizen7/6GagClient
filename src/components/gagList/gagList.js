import React, { useState } from 'react';
import Gag from '../gag/gag';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'


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
        var htmlGags = gags.map((gag,index) => {
            return (
                <div>
                    <Col key={index} md={4} className="text-center">
                        <Gag  Title={gag.title} Text={gag.text} onClickHandler={() => {onGagClick(gag)}}/>
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