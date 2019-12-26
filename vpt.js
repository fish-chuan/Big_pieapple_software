const Koa = require('koa');
const fs = require('fs');//流的功能，例如fs.createWriteStream 或 fs.createReadStream 
const path = require('path');//解析目錄
const Router = require('koa-router');
const koaBody = require('koa-body');//解析post請求、支援上傳檔案的功能
const static = require('koa-static');//解析靜態目錄資源
const position = 'D:/Github_connect/Big_pieapple_software'
const app = new Koa();
const router = new Router();

app.use(koaBody({
  multipart: true, // 支援檔案上傳
  formidable: {
    maxFieldsSize: 2 * 1024 * 1024, // 最大檔案為2兆
    multipart: true // 是否支援 multipart-formdate 的表單
  }
}));

const uploadUrl = "http://localhost:3001/static/upload";

router.get('/', (ctx) => {
  // 設定頭型別, 如果不設定，會直接下載該頁面
  ctx.type = 'html';
  // 讀取檔案
  const pathUrl = path.join(__dirname, 'view/video_push.html');
  const pathUr2 = path.join(__dirname, 'view/picture_push.html');
  if(pathUr2) {
    ctx.body = fs.createReadStream(pathUr2);//讀picture
  }
  else if(pathUr1) {
    ctx.body = fs.createReadStream(pathUrl);//讀video
  }
});

router.get("/main.css", async(ctx, next) => { //頁面框架
  ctx.type = "css";
  ctx.body = fs.createReadStream(`${position}/static/css/main_2.css`);
})

// 上傳檔案
router.post('/upload', (ctx) => {

  const file = ctx.request.files.file;
  console.log(file);//消息(file)輸出
  // 讀取檔案流
  const fileReader = fs.createReadStream(file.path);
  console.log(fileReader);

  const filePath = path.join(__dirname, '/everything_push');
  
  // 組裝成絕對路徑
  const fileResource = filePath + `/${file.name}`;

  /*
   使用 createWriteStream 寫入資料，然後使用管道流pipe拼接
  */
  const writeStream = fs.createWriteStream(fileResource);
  // 判斷 /everything_push 資料夾是否存在，如果不在的話就建立一個
  if (!fs.existsSync(filePath)) {
    fs.mkdir(filePath, (err) => {  //不在
      if (err) {
        throw new Error(err);
      } 
      else {
        fileReader.pipe(writeStream);
        ctx.body = fs.createReadStream(`${position}/view/login.html`);
        /*ctx.body = {
          url: uploadUrl + `/${file.name}`,
          code: 0,
          message: '上傳成功'
        };*/
      }
    });
  } 
  else {  //在
    fileReader.pipe(writeStream);
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/upload_success.html`);
    /*ctx.body = {
      url: uploadUrl + `/${file.name}`,
      code: 0,
      message: '上傳成功'
    };*/
  }
});

app.use(static(path.join(__dirname)));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, () => {
  console.log('server is listen in 3001');
});