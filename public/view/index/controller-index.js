import * as service from "@service/service-index.js";
export default {
  //获取数据并刷新视图
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