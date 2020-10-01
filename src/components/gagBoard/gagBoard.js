import React, { useEffect, useState } from 'react';
import GagList from '../gagList/gagList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from 'react-bootstrap';
import axios from 'axios';
import NavigatorBar from "../bar/navBar"



var GagBoard = () => {
    // todo : send http request to server to get gags
  
    const [gags , setGags] = useState([])

    const fetchGags = async() => {
        let respone = await axios.get("http://localhost:9090/api/gags")
        setGags(respone.data.gags)
    }

    useEffect(() => {
        fetchGags();
      },[]);

    return (
        <div id="gagBoard">
            <Container>
            <Row className="justify-content-md-center">
                    <Col className="text-center">
                        <h1>Gags</h1>
                    </Col>
                </Row>
                <GagList gags={gags}></GagList>
            </Container>
        </div>
    )
}

export default GagBoard;