
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Col,Row} from 'react-bootstrap'
import Gag from '../gag/gag'
import {getAllGages} from '../../logic/gagServerHandler/gagHandler'
import {useHistory} from 'react-router-dom'

var BestGagPage = () => {

    const history = useHistory();
    
    var onGagClick = (gag) => {
        console.log(gag.id)
        
        history.push({
            pathname:'/gags/' + gag.id
        })
    }

    const [gags , setGags] = useState([])
    const fetchGags = async() => {
        let respone = await getAllGages()
        setGags(respone.data.gags)
    }

    useEffect(() => {
        fetchGags();
      },[]);


    var rednerAllGags = () => {
        var lsPoints = gags.map(g => {
            return {
                point : g.likes.length - g.unlikes.length,
                gag : g
            }
        });
        var ls = lsPoints.sort((a, b) => b - a);

        var htmlGags = ls.map((g,index) => {
            var gag = g.gag
            return (
                <div>
                    <Col key={index} md={4} className="text-center">
                        <Gag  gag={gag} renderLikes={false} gagSize={ {width: '300px' , height:'400px' }} imgSize={{width: '300px' , height:'150px'}} onClickHandler={() => {onGagClick(gag)}}/>
                    </Col>
                </div>
                )
        })

        return (
            htmlGags
        )
    }
    return (
        <div>
            <Row className="justify-content-md-center">
                {rednerAllGags()}
            </Row>
        </div>
    )
}

export default BestGagPage;