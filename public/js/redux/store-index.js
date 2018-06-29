
let db = {
 "type":"storeIndex",
 "data":{
     "list":[],
     "show":true
 }
}
export let storeIndex=(state=db,action)=>{
   let {data,type} = action;
    if(type=="storeIndex"){
        return Object.assign({},state,action)
    }
    return state;
}