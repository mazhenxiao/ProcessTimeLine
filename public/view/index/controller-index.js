import * as service from "@service/service-index.js";
export default {
  //我在master上的注释
  async getData(){
       let {li:data} = await service.getData();
        this.dispatch({
          type:"storeIndex",
          data:{
            li
          }
        })
        
       
     }

   
   
}