import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from 'react-bootstrap';
import axios from 'axios'
import {Card,ListGroup,Button} from 'react-bootstrap'
import {addGag} from '../../logic/gagServerHandler/gagHandler'
var fs = require('fs');
const FormData = require('form-data');

var GagInserterPage = () => {
    const [message,setMessage] = useState("")
   
        var upload = async () => {
            
            let text = document.getElementById("text")
            let title = document.getElementById("title")
            let firstName = localStorage.getItem('name')
            var d = document.getElementById("file")
            const form = new FormData();
            form.append('text', text.value);
            form.append('title', title.value);
            form.append('name', firstName);
            if (d.files.length > 0){
                form.append("image", d.files[0]);
            }
            
            addGag(form).then(res => {
                setMessage("Succes")
            })
            .catch(err => {
                setMessage("Failed")
            })
        }

    return (
        <div>
            <Container>

                <Row className="justify-content-md-center">
                <Col md={8} className="text-center">
                    <Card>
                        <Card.Header>
                            <Card.Title className="text-center">
                                <h1>create gag</h1>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <label>Title : </label><input type="text" id="title"></input>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <label>Text : </label><input type="text" id="text"></input>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <input type="file" id="file" name="file"></input>
                            </ListGroup.Item>
                        </ListGroup> 
                        <div id="result">
                            <h1>{message}</h1>
                        </div>   
                        </Card.Body>

                        <Card.Footer className="text-center">
                        <Button onClick={() => {upload()}} variant="primary">Create gag</Button>
                        </Card.Footer>
                    </Card>
                
                    <Col className="text-center">
                        
                    </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default GagInserterPage;