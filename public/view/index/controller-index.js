import * as service from "@service/service-index.js";

export default {
     getData(){
         console.log("service=>",service);
        service.getData()
     }
}