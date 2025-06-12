// 打印版权
console.log(`
                                                            
 /$$   /$$ /$$   /$$  /$$$$$$  /$$   /$$ /$$   /$$  /$$$$$$ 
| $$  | $$| $$  | $$ /$$__  $$| $$  | $$| $$  | $$ /$$__  $$
| $$  | $$| $$  | $$| $$$$$$$$| $$  | $$| $$  | $$| $$$$$$$$
| $$  | $$| $$  | $$| $$_____/| $$  | $$| $$  | $$| $$_____/
|  $$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$/|  $$$$$$$
 \\____  $$ \\______/  \\_______/ \\____  $$ \\______/  \\_______/
 /$$  | $$                     /$$  | $$                    
|  $$$$$$/                    |  $$$$$$/                    
 \\______/                      \\______/                     
            v1.2.1
https://www.lddgo.net/string/text-to-ascii-art
    `);
//引入判断国家ip的api后
var foreignTips = (function () {
    var onSuccess = function (geoipResponse) {
        if (!geoipResponse.country.iso_code) {
            return;
        }
        var code = geoipResponse.country.iso_code.toLowerCase();
        if (code != 'cn'){
            btf.snackbarShow('使用国外网络访问将无法访问文章图片，敬请谅解。If you use foreign network access, you will not be able to access articles and pictures.')
        }
    };
    var onError = function (error) {
    };
    return function () {
        geoip2.country(onSuccess, onError);
    };
}());
foreignTips();

// 分享本页
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 控制台启用需要执行
let consoleOpened = false;
function openDesit(){
    btf.snackbarShow("检测到调试模式，请保留版权！")
}
// 打开控制台
function isConsoleOpen() {
    return window.outerWidth - window.innerWidth > 100;  // 差值阈值
}
window.addEventListener('resize', () => {
    if (isConsoleOpen()&& consoleOpened === false) {
        consoleOpened = true;
        openDesit()
    }
});
// 控制台已经打开
const testObj = { opened: false };
// 定时检测属性是否被修改
setTimeout(() => {
    if (!consoleOpened && !testObj.opened) {
        consoleOpened = true;
        openDesit()
    }
}, 1000);

testObj.opened = true;