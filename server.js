
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
                res.json({ data:[
                    {nodeName:"node1",id:"1",startTime:"",endTime:""}
                ] });
            })
        }
      }
}