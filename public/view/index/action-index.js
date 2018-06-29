import store from "@js/redux"
export default{
    Event_Click_Getstate(event){
         this.dispatch({
            type:"storeIndex",
            data:{
               list:[{
                   startTime:"1234123"
               }]
            }
        }) ;
        /*  store.dispatch({
             type:"storeIndex",
             data:{
                list:[{
                    startTime:"1234123"
                }]
             }
         }) */
    }
}