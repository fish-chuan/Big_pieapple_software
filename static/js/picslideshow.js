// 設定時間
var slideShowSpeed = 3000;

// 設定圖片 , 可隨意增加或減少
var Pic = new Array();
Pic[0] = 'https://keeplay.net/wp-content/uploads/2019/12/2020%E5%8F%B0%E4%B8%AD%E8%B7%A8%E5%B9%B4%E6%99%9A%E6%9C%83%E5%90%8E%E9%87%8C.png'
Pic[1] = 'https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/f_auto/blogtw/2019/12/2020%E5%8F%B0%E4%B8%AD%E8%B7%A8%E5%B9%B4%E6%99%9A%E6%9C%83%E5%A4%AA%E5%B9%B3.png'
//Pic[2] = '圖片網址3'
//Pic[3] = '圖片網址4'
//Pic[4] = '圖片網址5'

var t;
var j = 0;
var p = Pic.length;
var preLoad = new Array();
var crossFadeDuration = 3;
for (i = 0; i < p; i++) {
preLoad[i] = new Image();
preLoad[i].src = Pic[i];
}
function runSlideShow() {
if (document.all) {
document.images.SlideShow.style.filter="blendTrans(duration=2)";
document.images.SlideShow.style.filter="blendTrans(duration=crossFadeDuration)";
document.images.SlideShow.filters.blendTrans.Apply();
}
document.images.SlideShow.src = preLoad[j].src;
if (document.all) {
document.images.SlideShow.filters.blendTrans.Play();
}
j = j + 1;
if (j > (p - 1)) j = 0;
t = setTimeout('runSlideShow()', slideShowSpeed);
}