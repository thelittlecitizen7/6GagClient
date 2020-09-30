import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from 'react-bootstrap';
import axios from 'axios'
var fs = require('fs');
const FormData = require('form-data');

var GagInserterPage = () => {
    const [message,setMessage] = useState("")
   
        var upload = async () => {
            
            let text = document.getElementById("text")
            let title = document.getElementById("title")
            var d = document.getElementById("file")
            const form = new FormData();
            form.append('text', text.value);
            form.append('title', title.value);
            form.append("image", d.files[0]);
            


            console.log(d)

            axios.post('http://localhost:9090/api/upload', form, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
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
                
                    <Col className="text-center">
                        <h1>create gag</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={6} className="text-center">
                        <Col md={6} className="text-center">
                            <label>Title : </label><input type="text" id="title"></input>
                        </Col>
                        <Col md={6} className="text-center">
                        <label>Text : </label><input type="text" id="text"></input>
                        </Col>
                        <Col md={6} className="text-center">
                        <input type="file" id="file" name="file"></input>
                        </Col>
                        <Col md={6} className="text-center">
                            <button type="button" onClick={() => {upload()}}>Create</button>
                        </Col>
                        
                        <div id="result">
                            <h1>{message}</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default GagInserterPage;