import axios from "asios";
let success = (data)=>{
    return data
}
let error = (e)=>{
    return Promise.reject(e)
}
export default{
    getData(data){
        const url="/service/getData";
        axios.get(url,{params:{data}})
             .then(success)
             .catch(error)
    }
}
