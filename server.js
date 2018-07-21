
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
                res.json(
                    {
                        "tarck": [
                            {
                                "id": "0",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4785965",
                                "consume": "4787749",
                                "procEndTime": "4787756"
                            },
                            {
                                "id": "1",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4871323",
                                "consume": "4871533",
                                "procEndTime": "4871538"
                            },
                            {
                                "id": "2",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4871589",
                                "consume": "4871710",
                                "procEndTime": "4871714"
                            },
                            {
                                "id": "3",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4871759",
                                "consume": "4871908",
                                "procEndTime": "4871913"
                            },
                            {
                                "id": "4",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4871958",
                                "consume": "4872015",
                                "procEndTime": "4872019"
                            },
                            {
                                "id": "5",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4872059",
                                "consume": "4872142",
                                "procEndTime": "4872146"
                            },
                            {
                                "id": "6",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4872198",
                                "consume": "4872256",
                                "procEndTime": "4872260"
                            },
                            {
                                "ffmpegReader": "4871780",
                                "id": "3",
                                "postTime": "4871847",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "4872117",
                                "consume": "4872299",
                                "procEndTime": "4872338"
                            },
                            {
                                "id": "7",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4925498",
                                "consume": "4925695",
                                "procEndTime": "4925705"
                            },
                            {
                                "id": "8",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4925762",
                                "consume": "4925881",
                                "procEndTime": "4925890"
                            },
                            {
                                "ffmpegReader": "4871978",
                                "id": "4",
                                "postTime": "4871994",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "4925775",
                                "consume": "4926065",
                                "procEndTime": "4926115"
                            },
                            {
                                "id": "9",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4925935",
                                "consume": "4926378",
                                "procEndTime": "4926403"
                            },
                            {
                                "ffmpegReader": "4872106",
                                "id": "5",
                                "postTime": "4872120",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "4926356",
                                "consume": "4926613",
                                "procEndTime": "4926654"
                            },
                            {
                                "id": "10",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4926472",
                                "consume": "4926734",
                                "procEndTime": "4926743"
                            },
                            {
                                "ffmpegReader": "4872221",
                                "id": "6",
                                "postTime": "4872234",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "4926775",
                                "consume": "4926962",
                                "procEndTime": "4926999"
                            },
                            {
                                "id": "11",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4926799",
                                "consume": "4927094",
                                "procEndTime": "4927104"
                            },
                            {
                                "id": "3",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "4927136",
                                "consume": "4927323",
                                "procEndTime": "4927362"
                            },
                            {
                                "id": "12",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4927157",
                                "consume": "4927371",
                                "procEndTime": "4927379"
                            },
                            {
                                "ffmpegReader": "4925806",
                                "id": "8",
                                "postTime": "4925833",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "4927464",
                                "consume": "4927653",
                                "procEndTime": "4927688"
                            },
                            {
                                "ffmpegReader": "4925989",
                                "id": "9",
                                "postTime": "4926013",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "4927778",
                                "consume": "4927960",
                                "procEndTime": "4927994"
                            },
                            {
                                "id": "3",
                                "postTime": "4975055",
                                "node": "AudioComposer",
                                "tid": "6304",
                                "procBeginTime": "4872358",
                                "procEndTime": "4975263"
                            },
                            {
                                "id": "3",
                                "node": "AudioRender",
                                "tid": "9680",
                                "procBeginTime": "4975316",
                                "consume": "4975391",
                                "procEndTime": "4975425"
                            },
                            {
                                "id": "4",
                                "postTime": "4975471",
                                "node": "AudioComposer",
                                "tid": "6304",
                                "procBeginTime": "4975396",
                                "procEndTime": "4975519"
                            },
                            {
                                "id": "5",
                                "postTime": "4975649",
                                "node": "AudioComposer",
                                "tid": "6304",
                                "procBeginTime": "4975603",
                                "procEndTime": "4975690"
                            },
                            {
                                "id": "4",
                                "node": "AudioRender",
                                "tid": "9680",
                                "procBeginTime": "4996456",
                                "consume": "4996547",
                                "procEndTime": "4996582"
                            },
                            {
                                "id": "6",
                                "postTime": "4975808",
                                "node": "AudioComposer",
                                "tid": "6304",
                                "procBeginTime": "4975764",
                                "procEndTime": "4996756"
                            },
                            {
                                "ffmpegReader": "4871358",
                                "id": "1",
                                "postTime": "4871487",
                                "node": "reader-decoder-video-0",
                                "tid": "2524",
                                "procBeginTime": "4871552",
                                "consume": "5012325",
                                "procEndTime": "5012406"
                            },
                            {
                                "id": "13",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "4927451",
                                "consume": "5012690",
                                "procEndTime": "5012717"
                            },
                            {
                                "id": "5",
                                "node": "AudioRender",
                                "tid": "9680",
                                "procBeginTime": "5017772",
                                "consume": "5017853",
                                "procEndTime": "5017885"
                            },
                            {
                                "id": "3",
                                "postTime": "4996961",
                                "node": "AudioComposer",
                                "tid": "6304",
                                "procBeginTime": "4996889",
                                "procEndTime": "5018109"
                            },
                            {
                                "ffmpegReader": "4871613",
                                "id": "2",
                                "postTime": "4871684",
                                "node": "reader-decoder-video-0",
                                "tid": "2524",
                                "procBeginTime": "5012669",
                                "consume": "5028162",
                                "procEndTime": "5028194"
                            },
                            {
                                "id": "2",
                                "postTime": "5028217",
                                "node": "VideoComposer",
                                "tid": "5768",
                                "procBeginTime": "5028178",
                                "procEndTime": "5028290"
                            },
                            {
                                "id": "14",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5012794",
                                "consume": "5028472",
                                "procEndTime": "5028480"
                            },
                            {
                                "ffmpegReader": "4926517",
                                "id": "10",
                                "postTime": "4926677",
                                "node": "reader-decoder-video-0",
                                "tid": "2524",
                                "procBeginTime": "5028301",
                                "consume": "5033592",
                                "procEndTime": "5033619"
                            },
                            {
                                "id": "10",
                                "postTime": "5033633",
                                "node": "VideoComposer",
                                "tid": "5768",
                                "procBeginTime": "5033604",
                                "procEndTime": "5033655"
                            },
                            {
                                "id": "15",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5028509",
                                "consume": "5033905",
                                "procEndTime": "5033913"
                            },
                            {
                                "id": "6",
                                "node": "AudioRender",
                                "tid": "9680",
                                "procBeginTime": "5039106",
                                "consume": "5039147",
                                "procEndTime": "5039162"
                            },
                            {
                                "ffmpegReader": "4926840",
                                "id": "11",
                                "postTime": "4927020",
                                "node": "reader-decoder-video-0",
                                "tid": "2524",
                                "procBeginTime": "5033720",
                                "consume": "5039236",
                                "procEndTime": "5039260"
                            },
                            {
                                "id": "11",
                                "postTime": "5039264",
                                "node": "VideoComposer",
                                "tid": "5768",
                                "procBeginTime": "5039240",
                                "procEndTime": "5039289"
                            },
                            {
                                "id": "16",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5033940",
                                "consume": "5040166",
                                "procEndTime": "5040177"
                            },
                            {
                                "id": "8",
                                "postTime": "5018268",
                                "node": "AudioComposer",
                                "tid": "6304",
                                "procBeginTime": "5018204",
                                "procEndTime": "5040363"
                            },
                            {
                                "id": "17",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5040208",
                                "consume": "5040479",
                                "procEndTime": "5040482"
                            },
                            {
                                "id": "18",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5040505",
                                "consume": "5040555",
                                "procEndTime": "5040559"
                            },
                            {
                                "id": "19",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5040581",
                                "consume": "5040626",
                                "procEndTime": "5040630"
                            },
                            {
                                "id": "20",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5040651",
                                "consume": "5040699",
                                "procEndTime": "5040703"
                            },
                            {
                                "id": "21",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5040723",
                                "consume": "5040771",
                                "procEndTime": "5040775"
                            },
                            {
                                "ffmpegReader": "5040230",
                                "id": "17",
                                "postTime": "5040317",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "5040844",
                                "consume": "5040953",
                                "procEndTime": "5040968"
                            },
                            {
                                "ffmpegReader": "5040524",
                                "id": "18",
                                "postTime": "5040537",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "5041042",
                                "consume": "5041138",
                                "procEndTime": "5041153"
                            },
                            {
                                "ffmpegReader": "5040598",
                                "id": "19",
                                "postTime": "5040608",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "5041199",
                                "consume": "5041276",
                                "procEndTime": "5041292"
                            },
                            {
                                "ffmpegReader": "5040668",
                                "id": "20",
                                "postTime": "5040679",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "5041335",
                                "consume": "5041416",
                                "procEndTime": "5041434"
                            },
                            {
                                "ffmpegReader": "5040739",
                                "id": "21",
                                "postTime": "5040750",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "5041477",
                                "consume": "5041573",
                                "procEndTime": "5041593"
                            },
                            {
                                "id": "22",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5040795",
                                "consume": "5041670",
                                "procEndTime": "5041676"
                            },
                            {
                                "id": "23",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5041698",
                                "consume": "5041748",
                                "procEndTime": "5041752"
                            },
                            {
                                "id": "24",
                                "node": "reader-stream",
                                "tid": "9756",
                                "procBeginTime": "5041772",
                                "consume": "5041818",
                                "procEndTime": "5041821"
                            },
                            {
                                "ffmpegReader": "5040811",
                                "id": "22",
                                "postTime": "5040822",
                                "node": "reader-decoder-audio-1",
                                "tid": "7504",
                                "procBeginTime": "5041954",
                                "consume": "5042115",
                                "procEndTime": "5042139"
                            }
                        ]
                    }
                );
            })
        }
      }
}