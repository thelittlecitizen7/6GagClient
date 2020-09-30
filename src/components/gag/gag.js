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
                <Card.Img variant="top" style={{ width: '286px' , height:'115px' }}  src={`data:image/jpeg;base64,${props.img}`} />
                <Card.Body>
                    <Card.Title>{props.Title}</Card.Title>
                    <Card.Text>{props.Text}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default Gag;