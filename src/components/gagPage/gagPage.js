import React, { useState,useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col, Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './pageGageStyles.css';
import axios from 'axios';
import GagHandler from '../../logic/gagServerHandler/gagHandler'
// todo : add button to like and not and add comment and add Image

var gagHandler = new GagHandler()

var GagPage = () => {
    let {id} = useParams();
    const [gag,setGag] = useState({})

    const fetchGag = async(id) => {
        let respone = await axios.get(`http://localhost:9090/api/gag/${id}`)
        setGag(respone.data)
    }

    useEffect(() => {
        //gagHandler.getGag(id,setGag)
         fetchGag(id);
    },[]);


return (
    <div id="gagPage">
        <Container>
            <Row className="justify-content-md-center">
                <Col className="text-center">
                    <h1>{gag.title}</h1>
                </Col>
                
            </Row>
            <Row className="justify-content-md-center">
                <Col className="text-center">
                    <p>{gag.text}</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="text-center">
                    <img src={`data:image/jpeg;base64,${gag.img}`}></img>
                </Col>
            </Row>

        </Container>
    </div>
)
}

export default GagPage;