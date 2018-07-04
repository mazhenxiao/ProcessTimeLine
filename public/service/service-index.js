import Axios from "./decorator-index";
@Axios
 class serviceIndex{
    constructor(){
        console.log("this=>",this);
       
    }
    getData=({page=0,count=10}={})=>{
        let url="/getData"
      return this.$axios.get(url,{params:{page,count}})
                   .then(this.success)
                   .then(da=>{
                       return da;
                   })
                   .catch(this.error)
    }
 }

export let{ getData }=new serviceIndex()


