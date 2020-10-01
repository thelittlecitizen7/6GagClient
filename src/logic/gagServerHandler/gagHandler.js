import axios from 'axios';
import config from '../../config'

let url = config.url;

async function getAllGages(){
    return await axios.get(`${url}/api/gags`)
    
}

async function  getGag(id){
    return await axios.get(`${url}/api/gag/${id}`)
    
}


async function addGag(form){
    return await axios.post(`${url}/api/upload`, form, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            })
}

async function sendLike(id,isLike,name){
    return await axios.put(`${url}/api/like/`,{
            name : name,
            id : id,
            isLike : isLike
        })
}


export {
     getGag , getAllGages , addGag , sendLike
}