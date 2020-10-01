import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {Card,Button,ListGroup,ListGroupItem} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import './gagStyles.css'
import axios from 'axios'
import profilePic from '../../imgs/profilePic.png'

var Gag = (props) => {
    var renderPicture = () => {
        if (props.gag.img){
            return (<Card.Img variant="top" className="align-items-center" style={{ width: props.imgSize.width , height:props.imgSize.height }}  src={`data:image/jpeg;base64,${props.gag.img}`} />)
        }
    }

    var renderLikes = () => {
        if (props.renderLikes){
            return (
                <Card.Footer className="text-muted">
                    <div className="pull-right">
                        <i onClick={() => {doLike()}} id="like" class="fa fa-thumbs-up">{props.likesCounts.likes}</i>
                        <i onClick={() => {doUnLike()}} id="unlike" class="fa fa-thumbs-down">{props.likesCounts.unlikes}</i>
                    </div>

                    <div className="pull-left">
                        <p id="toleft">created by : {props.gag.name}</p>
                    </div>
                </Card.Footer>
            )
        }
        else{
            return (
                <Card.Footer className="text-muted">
                    <div className="pull-center">
                        <p id="toleft">created by : {props.gag.name}</p>
                    </div>
                </Card.Footer>
            )
        }
    }

    var onload = () => {
        console.log(props.likesCounts)
        if (props.like){
            var likeButton = document.getElementById("like")
            likeButton.style.color = "blue"


        }
        if (props.unlike){
            var unlikeButton = document.getElementById("unlike")
            unlikeButton.style.color = "red"
        }
    }
    
    useEffect(() => {
            onload()
    })

    const sendLike = async(isLike) => {
        let name = localStorage.getItem("name")
        if (props.gag.likes.includes(name)){
            console.log("already clicked")
            return;
        }
        let respone = await axios.put(`http://localhost:9090/api/like/`,{
            name : localStorage.getItem('name'),
            id : props.gag.id,
            isLike : isLike
        })
        console.log(respone)
        return respone
    }

    var doLike = async () => {
        var likeButton = document.getElementById("like")
        console.log(likeButton)

        await sendLike(true)
        likeButton.style.color = "blue"
        
    }

    var doUnLike = async() => {
        var unlikeButton = document.getElementById("unlike")
        console.log(unlikeButton)
        await sendLike(false)
        
        unlikeButton.style.color = "red"
        

    }

    return (
        <div style={{
            width: '18rem',
            marginBottom: '15px'
        }} 
        onClick={() => {props.onClickHandler()}} >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Card style={{ width: props.gagSize.width ,     height: props.gagSize.height }}>
            <Card.Header>
                <div class="d-flex align-items-center">
                    <div>
                        <img  src={profilePic} class="rounded-circle mr-3" height="50px" width="70px" alt="Card image cap"></img>
                    </div>
                        <Card.Title className="col p-1 m-0 text-center">
                            {props.gag.title}
                        </Card.Title>
                </div>
                
            </Card.Header>
                            
                        <div style={{paddingTop:"10px"}}>
                        {renderPicture()}
                        </div>

                    <Card.Body>                    
                        <Card.Text className="align-items-center">{props.gag.text}</Card.Text>
                    </Card.Body>
                    
                    {renderLikes()}


            </Card>
        </div>
    )

}

export default Gag;