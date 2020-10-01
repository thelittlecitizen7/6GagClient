import React, { useEffect, useState } from 'react';
import GagList from '../gagList/gagList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from 'react-bootstrap';
import {getAllGages} from '../../logic/gagServerHandler/gagHandler'


var GagBoard = () => {
    
  
    const [gags , setGags] = useState([])

    const fetchGags = async() => {
        let respone = await getAllGages()
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