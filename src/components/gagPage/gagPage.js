import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col, Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './pageGageStyles.css';


// todo : add button to like and not and add comment and add Image

var GagPage = () => {
    let {id} = useParams();
    const [gag,setGag] = useState(() => {
        console.log("search gag")
        return {
            title : "title here",
            text : "text here"
        }
    })

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

        </Container>
    </div>
)
}

export default GagPage;