const net = require('net');
const cout = process.stdout;
const cin = process.stdin;

var client = null;
var nick = '';

cout.write('请输入暱稱：');
//監聽命令行输入
cin.on('data',(chunk)=>{
 if(chunk.toString()!='\r\n'){
  if(client === null){
   nick = (chunk+'').replace(/[\r\n]/ig,"");
   createClient();
  }else{
   msg = (chunk+'').replace(/[\r\n]/ig,"");
   client.write(JSON.stringify({
    cmd: 'chat',
    msg: msg,
    nick: nick
   }));
   //如果输入是exit或quit则断开连接并退出
   if(msg.toLowerCase() == 'exit' || msg.toLowerCase() == 'quit'){
    client.end();
    cin.end();
    return;
   }
   cout.write('你说：${msg}\n\r');
  }
 }else{
  cout.write('请输入暱稱：');
 }
});

function addListener(client) {
 client.on('connect', () => {
  cout.write('已连接到ㄙ服器\n\r');
  client.write(JSON.stringify({
   cmd: 'login',
   msg: 'hello server',
   nick: nick
  }));
 });
 client.on('end', (chunk) => {
  cout.write('与ㄙ服器断开连接.\n\r');
 });
 client.on('data', (chunk) => {
  //如果是心跳信息则回应keep命令
  if(chunk.toString()=='::'){
   client.write(JSON.stringify({
    cmd: 'keep',
    msg: '',
    nick: nick
   }));
   return ;
  }
  cout.write(`${chunk}\n\r`);
 });
 client.on('error', (err) => {
  cout.write(`an error has occured.\n\r${err}`);
 });
}
/**
 * 创建socket并连ㄙ服器
 */
function createClient(){
 console.log('\033[2J');//清屏操作
 cout.write(`输入'EXIT OR QUIT'退出聊天室.\r\n`);
 client = new net.Socket()
 client.connect({port:8060/*,host:'1.1.1.69'*/});
 addListener(client);
}   
