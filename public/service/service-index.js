import Axios from "./decorator-index";
@Axios
 class serviceIndex{
    constructor(){
        console.log("this=>",this);
       
    }
    getData=({page=0,count=10}={})=>{
        // console.log(process.env.NODE_ENV);
        let url=current=="none"? "http://192.168.1.115:5000/FFLv2?getTrackList":"/getData";
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
    getTestTW=()=>{
        let url=current=="none"? "http://192.168.1.154:5000/FFLv2?getLogList":"/getTableData";
         // let url = 
          return this.$axios.get(url)
                    .then(this.success)
                     .then(da=>{
                         let str = `<p>${da.replace(/\n/ig,"</p><p>")}`;
                        return str.substr(0,str.lastIndexOf("<"));
                       
                     })
                     .catch(e=>{
                         console.log(e)
                     })
    }
 }

export let{ getData,getTestTW }=new serviceIndex()


