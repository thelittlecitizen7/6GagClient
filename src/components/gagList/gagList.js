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
                        <Gag  gag={gag} renderLikes={false} gagSize={ {width: '300px' , height:'400px' }} imgSize={{width: '300px' , height:'150px'}} onClickHandler={() => {onGagClick(gag)}}/>
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