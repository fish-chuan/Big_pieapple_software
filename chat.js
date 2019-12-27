//宣告變數
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();

// 線上人數計數
let onlineCount = 0;

//推到瀏覽器上顯示
app.get('/', (req, res) => {
    res.sendFile( __dirname + '/view/chatroom2.html');
});
// 當發生連線事件
io.on('connection', (socket) => {
    // 有連線發生時增加人數
    onlineCount++;
    // 發送人數給網頁
    io.emit("online", onlineCount);
    // 接收來自前端的 greet 事件
    // 然後回送 greet 事件，並附帶內容
    socket.on("greet", () => {
        socket.emit("greet", onlineCount);
    });
    //接收來自網頁端的訊息
    socket.on("send", (msg) => {
        
        // 如果 msg 內容鍵值小於 2,直接return 
        if (Object.keys(msg).length < 2) return;

        // 廣播訊息到聊天室
        io.emit("msg", msg);
    });

    socket.on('disconnect', () => {
        // 有人離線了，扣人
        onlineCount = (onlineCount < 0) ? 0 : onlineCount-=1;
        io.emit("online", onlineCount);
    });
});
router.get("/main.css", async (ctx, next) => {
    console.log("Rsponse main css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/static/css/main.css`);
});
// 伺服器位置
server.listen(3000, () => {
    console.log("Server Started. http://localhost:3000");
});
