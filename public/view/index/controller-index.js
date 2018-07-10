import * as service from "@service/service-index.js";
import { cons } from "fp-ts/lib/Array";
export default {
  //我在dev上的注释上的注释
  async C_getData(data){
       let {data:list} = await service.getData(data);
         // this.local.list = list;
          return list
     },
  async C_setTimeline({page=0,count=10}={}){
       let data =await this.C_getData({page,count});
       let sortlist = [...new Set(data.map(arg=>parseInt(arg.startTime)).concat(data.map(arg=>parseInt(arg.endTime))).sort())];
           this.local.timeLine=sortlist;
           this.C_filterList(data);//过滤数据
           this.C_dispatch();  //发布
     },
     C_filterList(da){
       let list = {};
           da.forEach(arg => {
               list[arg.nodeName]=list[arg.nodeName]||[];
               
               list[arg.nodeName].push(arg);
           });
           this.local.list = list;
           console.log(list);
     },
     C_dispatch(){
          let {timeLine,list}=this.local;
          this.dispatch({
            type:"storeIndex",
            data:{ list,timeLine}
          })
     }

   
   
}