import * as service from "@service/service-index.js";
export default {
  //我在dev上的注释上的注释
  async C_getData(data){
       let {data:list} = await service.getData(data);
          this.local.list = list;
          return list
     },
  async C_setTimeline({page=0,count=10}={}){
       let data =await this.C_getData({page,count});
       let sortlist = new Set(data.map(arg=>arg.startTime).sort());
           this.local.timeline=sortlist;
      
     },
     C_dispatch(){
       
     }

   
   
}