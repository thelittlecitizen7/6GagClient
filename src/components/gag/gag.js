import React from 'react';
import { useParams } from 'react-router-dom';
import {Card,Button} from 'react-bootstrap'

var Gag = (props) => {
    
    return (
        <div style={{
            width: '18rem',
            marginBottom: '15px'
        }} 
        onClick={() => {props.onClickHandler()}} >
            
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{props.Title}</Card.Title>
                    <Card.Text>{props.Text}</Card.Text>
                    <Button variant="primary">Insert</Button>
                </Card.Body>
            </Card>
            
        </div>
    )

}

export default Gag;