import React, { useState } from 'react';
import GagList from '../gagList/gagList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from 'react-bootstrap';



var GagBoard = () => {
    // todo : send http request to server to get gags
    const [gags , setGags] = useState([
        {id:11 ,title:"gag title 1",text:"gag text"},
        {id:11 ,title:"gag title 1",text:"gag text2"},
        {id:11 ,title:"gag title 1",text:"gag text2"},
        {id:11 ,title:"gag title 1",text:"gag text2"},
        {id:11 ,title:"gag title 1",text:"gag text2"}
    ])
    
    return (
        <div id="gagBoard">
            <Container>
                
            <Row className="justify-content-md-center text-center">
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