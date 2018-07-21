import Axios from "./decorator-index";
@Axios
 class serviceIndex{
    constructor(){
        console.log("this=>",this);
       
    }
    getData=({page=0,count=10}={})=>{
         
        let url=env=="none"? "http://192.168.1.115:5000/FFLv2?getTrackList":"/getData";
        //let url = "http://192.168.1.115:5000/FFLv2?getTrackList";
        //this.$axios.get(url,{params:{page,count}})
      return this.$axios.get(url)
                   .then(this.success)
                   .then(da=>{
                       let {tarck} = da
                       return tarck;
                   })
                   .catch(this.error)
    }
 }

export let{ getData }=new serviceIndex()


