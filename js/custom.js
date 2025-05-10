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
    `);var foreignTips=(()=>{function $($){$.country.iso_code&&"cn"!=$.country.iso_code.toLowerCase()&&btf.snackbarShow("使用国外网络访问将无法访问文章图片，敬请谅解。If you use foreign network access, you will not be able to access articles and pictures.")}function e($){}return function(){geoip2.country($,e)}})();function share(){let $=window.location.origin+window.location.pathname;new ClipboardJS(".share",{text:function(){return"标题："+document.title+"\n链接："+$}}),btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")}foreignTips();let consoleOpened=!1;function openDesit(){btf.snackbarShow("检测到调试模式，请保留版权！")}function isConsoleOpen(){return 100<window.outerWidth-window.innerWidth}window.addEventListener("resize",()=>{isConsoleOpen()&&!1===consoleOpened&&(consoleOpened=!0,openDesit())});let testObj={opened:!1};setTimeout(()=>{consoleOpened||testObj.opened||(consoleOpened=!0,openDesit())},1e3),testObj.opened=!0;