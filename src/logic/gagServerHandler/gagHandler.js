import axios from 'axios';
export default class GagHandler{
    constructor(){
    }

    getAll(){}

    async getGag(id,setGag){
        let respone = await axios.get(`http://localhost:9090/api/gag/${id}`)
        setGag(respone.data)
        return;
    }


    addGag(gag){}
}

// module.exports = {GagHandler}