import React from 'react'
import { Card, Container,Row,Button } from 'react-bootstrap'
import "./loginStyles.css"

var Login = (props) => {

    var onLoginClick = () => {
        let nameInput = document.getElementById("name")
        localStorage.setItem("name",nameInput.value)
        props.setName(nameInput.value)
    }
    return (
            <div>
                <Container>
                    
                    <Row className="justify-content-md-center">
                        <Card id="loginCard">
                            <Card.Header className="text-center">
                                <label>Login</label>
                            </Card.Header>
                            <Card.Body className="text-center">
                                    <label>Name :  </label><input id="name" type="text"></input>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button onClick={() => {onLoginClick()}} variant="primary">Login</Button>
                            </Card.Footer>
                        </Card>
                    </Row>
                </Container>
            </div>
        
    )
}

export default Login;