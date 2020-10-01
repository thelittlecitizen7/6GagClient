import React, { useState,useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col, Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './pageGageStyles.css';
import axios from 'axios';
// import GagHandler from '../../logic/gagServerHandler/gagHandler'
import Gag from '../gag/gag'


var GagPage = () => {
    let {id} = useParams();
    const [gag,setGag] = useState({})
    const [like,setLike] = useState(false)
    const [unlike,setUnLike] = useState(false)

    const [likesCount,setLikeCount] = useState(0)
    const [unlikesCount,setUnLikeCount] = useState(0)

    
    const fetchGag = async(id) => {
        let respone = await axios.get(`http://localhost:9090/api/gag/${id}`)
        let name = localStorage.getItem("name")
        if (respone.data.likes.includes(name)){
            console.log("like")
            console.log(respone.data.likes)
            
            setLike(true)
        }
        if (respone.data.unlikes.includes(name)){
            console.log("unlike")
            console.log(respone.data.unlikes)
            
            setUnLike(true)
        }
        setUnLikeCount(respone.data.unlikes.length)
        setLikeCount(respone.data.likes.length)
        setGag(respone.data)
    }

    useEffect(() => {
        
         fetchGag(id);
    },[]);

return (
    <div id="gagPage">
        <Container>
            <Row className="justify-content-md-center">
                <Col md={8} className="text-center">
                    <Gag  gag={gag} renderLikes={true} likesCounts={{likes:likesCount,unlikes:unlikesCount}} like={like} unlike={unlike} gagSize={ {width: '700px' , height:'600px' }} imgSize={{width: '700px' , height:'300px'}} onClickHandler={() => {}}/>
                </Col>
            </Row>
           
        </Container>
    </div>
)
}

export default GagPage;