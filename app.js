const Koa = require('koa');
const Router = require('koa-router');
var fs = require('fs');
const bodyParser = require('koa-bodyparser');
//const mongoose = require('mongoose');
const position = 'D:/Github_connect/Big_pieapple_software'
const app = new Koa();
const router = new Router();

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
  });*/

app.use(bodyParser());

router.get("/", async (ctx, next) => {
    console.log("-----------------");
    console.log("Rsponse main page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/login.html`);
});
router.post("/check", async (ctx, next) => {
    console.log("resive login data");
    ctx.type = "html";
    var content = ctx.request.rawBody;
    console.log(content);
    if(content == 'user_name=admin&password=password'||content == 'user_name=user&password=qwer'  ){
        ctx.body = fs.createReadStream(`${position}/view/index.html`);
    }
    else{
        ctx.body = fs.createReadStream(`${position}/view/login.html`);
    }
});
router.get("/index", async (ctx, next) => {
    console.log("Rsponse login page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/index.html`);
});
router.get("/personality", async (ctx, next) => {
    console.log("Rsponse personality page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/personality.html`);
});
router.get("/picture_push", async (ctx, next) => {
    console.log("Rsponse picture_push page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/picture_push.html`);
});
router.get("/video_push", async (ctx, next) => {
    console.log("Rsponse video_push page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/video_push.html`);
});
router.get("/text_push", async (ctx, next) => {
    console.log("Rsponse text_push page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/text_push.html`);
});
router.get("/fans", async (ctx, next) => {
    console.log("Rsponse fans page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/fans.html`);
});
router.get("/introduction", async (ctx, next) => {
    console.log("Rsponse introduction page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/introduction.html`);
});
router.get("/introduction_sucess", async (ctx, next) => {
    console.log("Rsponse introduction_sucess page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/introduction_sucess.html`);
});
router.get("/discard", async (ctx, next) => {
    console.log("Rsponse discard page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/discard.html`);
});
router.get("/discard_t", async (ctx, next) => {
    console.log("Rsponse discard_t page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/discard_t.html`);
});
router.get("/discard_p", async (ctx, next) => {
    console.log("Rsponse discard_p page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/discard_p.html`);
});
router.get("/discard_v", async (ctx, next) => {
    console.log("Rsponse discard_v page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/discard_v.html`);
});
router.get("/activity", async (ctx, next) => {
    console.log("Rsponse activity page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity.html`);
});
router.get("/activity_old", async (ctx, next) => {
    console.log("Rsponse activity_old page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_old.html`);
});
router.get("/activity_coming", async (ctx, next) => {
    console.log("Rsponse activity_coming page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_coming.html`);
});
router.get("/activity_manager", async (ctx, next) => {
    console.log("Rsponse activity_manager page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_manager.html`);
});
router.get("/activity_login", async (ctx, next) => {
    console.log("Rsponse activity_login page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_login.html`);
});
router.get("/activity_add", async (ctx, next) => {
    console.log("Rsponse activity_add page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_add.html`);
});
router.get("/activity_add_on", async (ctx, next) => {
    console.log("Rsponse activity_add_on page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_add_on.html`);
});
router.get("/activity_change", async (ctx, next) => {
    console.log("Rsponse activity_change page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_change.html`);
});
router.get("/activity_delete", async (ctx, next) => {
    console.log("Rsponse activity_delete page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_delete.html`);
});
router.get("/activity_manager_application", async (ctx, next) => {
    console.log("Rsponse activity_manager_application page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/activity_manager_application.html`);
});
router.get("/upload1", async (ctx, next) => {
    console.log("Rsponse upload page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/upload1.html`);
});
router.get("/post_18", async (ctx, next) => {
    console.log("Rsponse post_18 page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/post_18.html`);
});
router.get("/chatroom", async (ctx, next) => {
    console.log("Rsponse chatroom page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/chatroom.html`);
});
router.get("/public_some", async (ctx, next) => {
    console.log("Rsponse public_some page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/public_some.html`);
});
router.get("/page_upload", async (ctx, next) => {
    console.log("Rsponse page_upload page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/page_upload.html`);
});
router.post("/public_success", async (ctx) => {
    console.log("Rsponse public_success page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/view/public_success.html`);
});

//css
router.get("/main.css", async (ctx, next) => {
    console.log("Rsponse main css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/static/css/main_2.css`);
});
router.get("/fontawesome-all-min.css", async (ctx, next) => {
    console.log("Rsponse fontawesome-all-min.css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/static/css/fontawesome-all-min.css`);
});
router.get("/login_table.css", async (ctx, next) => {
    console.log("Rsponse login_table.css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/static/css/login_table.css`);
});
router.get("/all.css", async (ctx, next) => {
    console.log("Rsponse all.css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/static/css/all.css`);
});
router.get("/managerform.css", async (ctx, next) => {
    console.log("Rsponse managerform.css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/static/css/managerform.css`);
});

//images
router.get("/avatar.jpg", async (ctx, next) => {
    console.log("Rsponse avatar pic");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/avatar.jpg`);
});
router.get("/whethering_cover.jpg", async (ctx, next) => {
    console.log("Rsponse weather pic");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/whethering_cover.jpg`);
});
router.get("/logo.jpg", async (ctx, next) => {
    console.log("Rsponse logo.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/logo.jpg`);
});
router.get("/pic02.jpg", async (ctx, next) => {
    console.log("Rsponse pic02.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic02.jpg`);
});
router.get("/pic03.jpg", async (ctx, next) => {
    console.log("Rsponse pic03.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic03.jpg`);
});
router.get("/pic04.jpg", async (ctx, next) => {
    console.log("Rsponse pic04.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic04.jpg`);
});
router.get("/pic05.jpg", async (ctx, next) => {
    console.log("Rsponse pic05.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic05.jpg`);
});
router.get("/pic06.jpg", async (ctx, next) => {
    console.log("Rsponse pic06.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic06.jpg`);
});
router.get("/pic07.jpg", async (ctx, next) => {
    console.log("Rsponse pic07.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic07.jpg`);
});
router.get("/pic08.jpg", async (ctx, next) => {
    console.log("Rsponse pic08.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic08.jpg`);
});
router.get("/pic09.jpg", async (ctx, next) => {
    console.log("Rsponse pic09.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic09.jpg`);
});
router.get("/pic10.jpg", async (ctx, next) => {
    console.log("Rsponse pic10.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic10.jpg`);
});
router.get("/pic11.jpg", async (ctx, next) => {
    console.log("Rsponse pic11.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic11.jpg`);
});
router.get("/pic12.jpg", async (ctx, next) => {
    console.log("Rsponse pic12.jpg");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/images/pic12.jpg`);
});
router.get("/icon_photo.png", async (ctx, next) => {
    console.log("Rsponse icon_photo.png");
    ctx.type = "png";
    ctx.body = fs.createReadStream(`${position}/static/images/icon_photo.png`);
});
router.get("/icon_text.png", async (ctx, next) => {
    console.log("Rsponse icon_text.png");
    ctx.type = "png";
    ctx.body = fs.createReadStream(`${position}/static/images/icon_text.png`);
});
router.get("/icon_video.png", async (ctx, next) => {
    console.log("Rsponse icon_video.png");
    ctx.type = "png";
    ctx.body = fs.createReadStream(`${position}/static/images/icon_video.png`);
});
router.get("/tree.jpg", async (ctx, next) => {
    console.log("Rsponse tree.png");
    ctx.type = "png";
    ctx.body = fs.createReadStream(`${position}/static/images/tree.jpg`);
});

//icon
router.get("/fa-brands-400.eot", async (ctx, next) => {
    console.log("Rsponse fa-brands-400.eot");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/webfonts/fa-brands-400.eot`);
});
router.get("/fa-regular-400.woff", async (ctx, next) => {
    console.log("Rsponse fa-regular-400.woff");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/webfonts/fa-regular-400.woff`);
});
router.get("/fa-brands-400.woff2", async (ctx, next) => {
    console.log("Rsponse fa-brands-400.woff2");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/webfonts/fa-brands-400.woff2`);
});
router.get("/fa-regular-400.ttf", async (ctx, next) => {
    console.log("Rsponse fa-regular-400.ttf");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/webfonts/fa-regular-400.ttf`);
});
router.get("/fa-solid-900.eot", async (ctx, next) => {
    console.log("Rsponse fa-solid-900.eot");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/webfonts/fa-solid-900.eot`);
});
router.get("/fa-solid-900.woff", async (ctx, next) => {
    console.log("Rsponse fa-solid-900.woff");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/webfonts/fa-solid-900.woff`);
});
router.get("/fa-solid-900.ttf", async (ctx, next) => {
    console.log("Rsponse fa-solid-900.ttf");
    ctx.type = "jpg";
    ctx.body = fs.createReadStream(`${position}/static/webfonts/fa-solid-900.ttf`);
});


//script
router.get("/jquery.min.js", async (ctx, next) => {
    console.log("Rsponse jquery.min.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/jquery.min.js`);
});
router.get("/browser.min.js", async (ctx, next) => {
    console.log("Rsponse browser.min.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/browser.min.js`);
});
router.get("/breakpoints.min.js", async (ctx, next) => {
    console.log("Rsponse breakpoints.min.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/breakpoints.min.js`);
});
router.get("/util.js", async (ctx, next) => {
    console.log("Rsponse util.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/util.js`);
});
router.get("/main.js", async (ctx, next) => {
    console.log("Rsponse main.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/main.js`);
});
router.get("/click_like.js", async (ctx, next) => {
    console.log("Rsponse click_like.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/click_like.js`);
});
router.get("/showmore.js", async (ctx, next) => {
    console.log("Rsponse showmore.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/showmore.js`);
});
router.get("/activity_m.js", async (ctx, next) => {
    console.log("Rsponse activity_m.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/activity_m.js`);
});
router.get("/alert.js", async (ctx, next) => {
    console.log("Rsponse alert.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/alert.js`);
});
router.get("/chat.js", async (ctx, next) => {
    console.log("Rsponse chat.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/static/js/chat.js`);
});

// 静態資源
/*app.use(convert(koaStatic(
    path.join(__dirname , './static')
)))*/

/*mongoose.Promise = global.Promise;
mongoose.connect(config.database);*/

// 初始化路由中間層
//app.use(routers.routes()).use(routers.allowedMethods())
app.use(router.routes()).use(router.allowedMethods());
app.listen(3003);
console.log('The server is on prot 3003')