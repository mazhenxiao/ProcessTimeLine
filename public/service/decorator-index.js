import axios from "axios";
let Axios, instance,success,error;
 instance = axios.create({
    headers: {
        'Accept':'application/json',  
        'Content-Type':'application/json'
        }
})
 success=(da)=>{
    return da
}
 error=(e)=>{
  return Promise.reject(e)
}
export default Axios=(target,name,discriptor)=>{
   Object.assign(target.prototype,{instance,success,error})
    return target;
}