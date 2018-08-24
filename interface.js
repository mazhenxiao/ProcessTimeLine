/**
 *  格式需要按照规定设置，依赖pdfkit生成pdf文件，option中设置生成路径,生成到当前目录下路径地址
 * @name [html pdf md 自动生成]
 * @param type 说明
 * @template <template />
 */

const option={
  from:"../src/",
  to:"../doc/",
  extname:[".vue",".js",".ts"]
}

const fs = require("fs");
const path = require("path");
const url = require("url");
const pdfkit = require("pdfkit");
const os = require("os");

class CreateDoc{
  constructor(){

    this.html = "";
    this.pdf =[];
    this.md="";
    option.from = option.from? path.join(__dirname,option.from):path.join(__dirname,"../","/src");
    option.to = option.to? path.join(__dirname,option.to):path.join(__dirname,"../","/doc/");

    this.init();
  }
  init(){

      this.create(option.from);
      this.listDoc();

  }
  listDoc(){

    let arr = [];
    this.html&& arr.push("html")
    this.pdf.length && arr.push("pdf")
    this.md && arr.push("md")
    arr.forEach(da=>{
      let url = option.to;
      (!fs.existsSync(url))&&fs.mkdirSync(url);
        let src = url+"interface."+da;
      switch(da){
        case "html":this.createHTML(src);break;
        case "pdf":this.createPDF(src);break;
        case "md":this.createMD(src);break;
      }



    })
  }
  createPDF(src){
    let doc = new pdfkit();
    let fonturl = os.platform().includes("darwin")? "/Library/Fonts/Arial Unicode.ttf":
                  os.platform().includes("win32")? "c:/windows/fonts/arial":""

        doc.pipe(fs.createWriteStream(src,{flag:"w+"}));
        let regName = /@name/ig;
        let regParam = /@param/ig;
        let regTemp = /@template/ig;
        debugger
        this.pdf.forEach(da=>{

            if(regName.test(da)){  //h4
              doc.font(fonturl)
                 .fontSize(14)
                 .fillColor("#cc0000")
                 .text(da.replace(regName,""));
            }else if(regParam.test(da)){
              doc.fontSize(12)
                 .fillColor("#5b5b5b")
                 .text(da.replace(regParam,""));
            }else{
              doc.fontSize(12)
                 .fillColor("#49b1df")
                 .text(da.replace(regTemp,""));
            }


        })

        doc.end();
  }
  createMD(src){
     let stm = fs.createWriteStream(src,{flag:"w+"})
         stm.write(this.md)
         stm.end();

  }
  createHTML(src){
      let tem = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1.0">
          <title>sinoocean</title>
          <style>
             *{padding:0;margin:0}
             section h4{ background:rgb(40, 110, 197);padding:3px 10px;color:#fff;font-size:16px;}
             section div{ padding:10px;}
             section p{
               border: #ccc solid 1px;  padding:0 5px;margin: 0;border-top: none;color: #666;font-size:12px;display:flex;
             }
             section div p:nth-child(1){border-top:#ccc solid 1px}
             section div p:nth-child(odd){ rgba(217, 220, 220, 0.5)}
             section div p span{ display:inline-block;min-width:90px;write-space:nomal;border-left:#ccc solid 1px;padding:3px;background:transparent}
             section div p span:nth-child(1){ flex:1;border-left:none}
             section div p span:nth-child(2){ flex:1}
             section div p span:nth-child(3){ flex:3}
             section div pre{ padding:10px;color:#9e0000}
          </style>
        </head>
        <body>
          <%template%>
        </body>
      </html>`
      tem=tem.replace(/<%template%>/ig,this.html);
      fs.writeFileSync(src,tem,{flag:"w+"})

  }

  async readFile(src){ //读取文件
      let str = fs.readFileSync(src,"utf8");
      let clear = /(?:\/\*\*)|(?:\*\/)|\*\s*/ig;
      let pdfarr = /(?:@name|@param)\s.*|.*@template?.*\n(?:[^*]*\n)*.*/ig;
      let reg = /\/\*\*[\s]+.*?(@name[\s\S]*@template[\s\S]*)\*\/[\n\t\v]+/ig;
      let reg2 = /\/\*\*\n.*@name.*?\n(?:.*@param.*\n)+.*@template?.*\n(?:[^*]*\n)*.*\*\//ig
      let name = /\*[\s]+@name[\s]+\[(.*?)\]/ig;
      let param =/\*[\s]+@param[\s](.+)/ig;
      let template = /.*@template?(.*\n(?:[^*]*\n)*)/ig ///\*[\s]+@template([\s\S]+)/ig;
      let param2 = /\s*\*\s*@param[\s\S]+\*[\s]+@template/ig;
      let spece = /<p>(.*)[\s]*<\/p>/ig;
      let filterStr = str.replace(reg,"$1");

      if(reg.test(str)){
        let md="";
        str.match(reg2).forEach(data=>{
                   let html = md = data;

                  let span = (data.match(param)||[]).map(da=>{
                    return `<p>`+da.replace(param,"$1")
                                   .replace(/\[(.*?)\]/ig,"<span>$1</span>")
                                   .replace(/<\/span>\s*(.*?)\s+/ig,"</span><span>$1</span><span>")
                                   .replace(/<span>$/ig,"")+"</span></p>";
                                 });


                      html =   html.replace(/</ig,"&lt;").replace(/>/ig,"&gt;")
                                   .replace(/\/\*\*/ig,"<section>")
                                   .replace(name,`<h4>$1</h4><div>`)
                                   .replace(param2,span.join("\n")+"* @template ")
                                   .replace(template,"<pre>$1</pre>")
                                   .replace(/\*\//ig,"");
                    this.html+=html+"</div></section>";

                    //生成pdf
                    let pdf =data;
                        pdf = (pdf.replace(clear,"").match(pdfarr)||[])
                        this.pdf=this.pdf.concat(pdf);
                    //生成md

                        this.md+= md.replace(/\/\*\*|\*\//ig,"")
                                   .replace(name,"#### $1 \n")
                                   .replace(param,"> $1")
                                   .replace(template,"\n ~~~ html \n $1 \n  ~~~\n")

                });



      }

    //  this.createFile()
  }
  async create(src){  //判断分发
    let _fs=fs.existsSync(src);

     if(_fs){
        let status = fs.statSync(src);
        if(status.isDirectory()){
          let list = fs.readdirSync(src);
           list.forEach(da=>{this.create(path.resolve(src,da))})
        }else{
          let extname = path.extname(src);
          if(option.extname.includes(extname)){
              this.readFile(src);
          }
        }
     }else{
        console.error("文件路径不存在");
     }


  }

}
new CreateDoc();
