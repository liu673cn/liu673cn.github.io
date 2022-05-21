function browserRedirect() {
    　　var sUserAgent = navigator.userAgent.toLowerCase();
    　　var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    　　var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    　　var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    　　var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    　　var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    　　var bIsAndroid = sUserAgent.match(/android/i) == "android";
    　　var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    　　var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    　　if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        if(window.location.href.indexOf("mobile") === -1){
            window.location.href="../new/";
        }
    　　　　
    　　} else {
        if(window.location.href.indexOf("mobile") !== -1){
            window.location.href="../new/";
        }
    　　　　
    　　}　　　　
    }
window.onload = function(){
    browserRedirect() 
    window.onresize = function(){
        console.log('尺寸改变')
        browserRedirect();
    }
}
    
    
    function mouseEvent(v){
        document.querySelector(v.id).addEventListener('mouseover',function(theEvent){
            var browser=navigator.userAgent;   
            if (browser.indexOf("MSIE")>0){ 
                      if (this.contains(theEvent.toElement)) return; // 如果是子元素则结束函数
              }else{
           　　    if (this.contains(theEvent.relatedTarget)) return; // 如果是子元素则结束函数
           }
           /*要执行的操作*/
           createToolTips(this,v)
        })
        document.querySelector(v.id).addEventListener('mouseout',function(theEvent){
            var browser=navigator.userAgent;   
            if (browser.indexOf("MSIE")>0){ 
                      if (this.contains(theEvent.toElement)) return; // 如果是子元素则结束函数
              }else{
           　　    if (this.contains(theEvent.relatedTarget)) return; // 如果是子元素则结束函数
           }
           this.removeChild(this.querySelector('h6'))
        })
    }

    function createToolTips(parent,v){
        let oh6 =  document.createElement('h6');
        oh6.innerHTML= v.tips
        oh6.className = 'toolTips'
        if(v.direction !== 'top'){
            oh6.className= 'toolTips btmToolTips' 
        }else{
            oh6.className = 'toolTips'
        }
        if(v.size === 'm'){
            oh6.className += ' toolTipsMiddle'
        }
        parent.appendChild(oh6)

    }

    const tipConfig = [{
        id: '#android_app',
        tips:'手机android下载',
        desc:'open',
        direction:'top',
        size:'m',
        url:'https://liu673cn.github.io/apk/'
    },{
        id:'#ios_app',
        tips:'手机ios下载',
        desc:'open',
        direction:'top',
        size:'m',
        url:'https://liu673cn.github.io/iso/'
    },{
        id:'#window_client',
        tips:'win点击直接下载',
        desc:'open',
        direction:'top',
        size:'m',
        url:'https://liu673cn.github.io/win/'
    },{
        id:'#ios_client',
        tips:'ios点击直接下载',
        desc:'open',
        direction:'top',
        size:'m',
        url:'https://liu673cn.github.io/mac/'
    },{
        id:'#btnZero',
        tips:'商业翻译合作',
        size:'m',
        url:'#'
    },{
        id:'#btnOne',
        tips:'字幕组筹备中',
        size:'m',
        url:'#'
    },{
        id:'#btnTwo',
        tips:'官方微博关注',
        size:'m',
        url:'#'
    },{
        id:'#btnThree',
        tips:'官方抖音账号',
        size:'m',
        url:'#'
    }]
    //鼠标移入事件
    tipConfig.forEach(v=>{
        mouseEvent(v)
        document.querySelector(v.id).onclick = function(){
            if(v.desc === 'open'){
                window.open(v.url)
              
            }
            if(v.desc === 'download'){
                alert('内测中')
                 //window.location.href = v.url//这里上面配下载地址
            }
        }
        

    })
   
