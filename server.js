
const fs = require("fs");
const path = require("path");
let readfile = (url)=>{
    return new Promise((resolve,reject) => {
      fs.readFile(url, (state, data) => {
          return resolve(data.toString());
      })
  })
  }

module.exports={
    devServer: {
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 3000, 
        contentBase: path.join(__dirname, '/public/dist/'), // boolean | string | array, static file location
        open:true,
        compress: false, // 开启虚拟服务器时，为你的代码进行压缩。加快开发流程和优化的作用
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // 热更新
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        before(app){
            //==============index
            app.get("/",async (req, res)=>{
              let txt="";
                fs.readFileSync(path.join(__dirname,"index.html"),(error,data)=>{
                    txt = data.toString();
                    console.log(txt);
                    
                })
              txt = await readfile(path.join(__dirname,"index.html"));
             // console.log(txt);
                res.send(txt);
               // res.json({ custom: 'response' });
            })
            //===============
            app.get("/getData",async (req,res)=>{
                let jc = 1530686477957;
                let fn =()=>{ return parseInt(jc+1000*60*Math.random()*10)}
                res.json({ data:[
                    {nodeName:"node1",id:"1",startTime:1530686477957,endTime:fn()},
                    {nodeName:"node1",id:"2",startTime:fn(),endTime:fn()},
                    {nodeName:"node1",id:"3",startTime:fn(),endTime:fn()},
                    {nodeName:"node1",id:"4",startTime:fn(),endTime:fn()},
                    {nodeName:"node2",id:"5",startTime:fn(),endTime:fn()},
                    {nodeName:"node2",id:"6",startTime:fn(),endTime:fn()},
                    {nodeName:"node2",id:"7",startTime:fn(),endTime:fn()},
                    {nodeName:"node2",id:"8",startTime:fn(),endTime:fn()},
                    {nodeName:"node2",id:"9",startTime:fn(),endTime:fn()},
                    {nodeName:"node2",id:"10",startTime:fn(),endTime:fn()},
                    {nodeName:"node3",id:"11",startTime:fn(),endTime:fn()},
                    {nodeName:"node3",id:"12",startTime:fn(),endTime:fn()},
                    {nodeName:"node3",id:"13",startTime:fn(),endTime:fn()},
                    {nodeName:"node3",id:"14",startTime:fn(),endTime:fn()},
                    {nodeName:"node4",id:"15",startTime:fn(),endTime:fn()},
                    {nodeName:"node5",id:"16",startTime:fn(),endTime:fn()},
                    {nodeName:"node4",id:"17",startTime:fn(),endTime:fn()},
                    {nodeName:"node4",id:"18",startTime:fn(),endTime:fn()}, 
                    {nodeName:"node4",id:"19",startTime:fn(),endTime:fn()},
                    {nodeName:"node6",id:"20",startTime:fn(),endTime:fn()},
                    {nodeName:"node6",id:"21",startTime:fn(),endTime:fn()},
                    {nodeName:"node6",id:"22",startTime:fn(),endTime:fn()},
                    {nodeName:"node6",id:"23",startTime:fn(),endTime:fn()},
                    {nodeName:"node7",id:"24",startTime:fn(),endTime:fn()},
                    {nodeName:"node7",id:"25",startTime:fn(),endTime:fn()},
                    {nodeName:"node7",id:"26",startTime:fn(),endTime:fn()},
                    {nodeName:"node7",id:"27",startTime:fn(),endTime:fn()},
                    {nodeName:"node8",id:"28",startTime:fn(),endTime:fn()},
                    {nodeName:"node8",id:"29",startTime:fn(),endTime:fn()},
                    {nodeName:"node8",id:"30",startTime:fn(),endTime:fn()},
                    {nodeName:"node8",id:"31",startTime:fn(),endTime:fn()},
                    {nodeName:"node8",id:"32",startTime:fn(),endTime:fn()},
                    {nodeName:"node9",id:"33",startTime:fn(),endTime:fn()},
                    {nodeName:"node9",id:"34",startTime:fn(),endTime:fn()},
                    {nodeName:"node9",id:"35",startTime:fn(),endTime:fn()},
                    {nodeName:"node9",id:"36",startTime:fn(),endTime:fn()},
                    {nodeName:"node9",id:"37",startTime:fn(),endTime:fn()},
                    {nodeName:"node10",id:"38",startTime:fn(),endTime:fn()},
                    {nodeName:"node10",id:"39",startTime:fn(),endTime:fn()},
                    {nodeName:"node10",id:"40",startTime:fn(),endTime:fn()},
                    {nodeName:"node10",id:"41",startTime:fn(),endTime:fn()},
                    {nodeName:"node10",id:"42",startTime:fn(),endTime:fn()},
                    {nodeName:"node11",id:"43",startTime:fn(),endTime:fn()},
                    {nodeName:"node11",id:"44",startTime:fn(),endTime:fn()},
                    {nodeName:"node11",id:"45",startTime:fn(),endTime:fn()},
                    {nodeName:"node11",id:"46",startTime:fn(),endTime:fn()},
                    {nodeName:"node11",id:"47",startTime:fn(),endTime:fn()},
                    {nodeName:"node12",id:"48",startTime:fn(),endTime:fn()},
                    {nodeName:"node12",id:"49",startTime:fn(),endTime:fn()},
                    {nodeName:"node12",id:"50",startTime:fn(),endTime:fn()},
                    {nodeName:"node12",id:"51",startTime:fn(),endTime:fn()},
                    {nodeName:"node12",id:"52",startTime:fn(),endTime:fn()},
                    {nodeName:"node13",id:"53",startTime:fn(),endTime:fn()},
                    {nodeName:"node13",id:"54",startTime:fn(),endTime:fn()},
                    {nodeName:"node13",id:"55",startTime:fn(),endTime:fn()},
                    {nodeName:"node13",id:"56",startTime:fn(),endTime:fn()},
                    {nodeName:"node13",id:"57",startTime:fn(),endTime:fn()},
                    {nodeName:"node14",id:"58",startTime:fn(),endTime:fn()},
                    {nodeName:"node14",id:"59",startTime:fn(),endTime:fn()},
                    {nodeName:"node14",id:"60",startTime:fn(),endTime:fn()},
                    {nodeName:"node14",id:"61",startTime:fn(),endTime:fn()},
                    {nodeName:"node14",id:"62",startTime:fn(),endTime:fn()},
                    {nodeName:"node14",id:"63",startTime:fn(),endTime:fn()},
                    {nodeName:"node14",id:"64",startTime:fn(),endTime:fn()},
                    {nodeName:"node14",id:"65",startTime:fn(),endTime:fn()},
                ] });
            })
        }
      }
}