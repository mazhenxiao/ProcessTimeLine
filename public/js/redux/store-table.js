
let db = {
    "type":"storeTable",
    "data":{
        "list":[],
        "text":""
    }
   }
   export let storeTable=(state=db,action)=>{
      let {data,type} = action;
      
       if(type=="storeTable"){
           return Object.assign({},state,action)
       }
       return state;
   }