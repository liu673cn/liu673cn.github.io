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
        tips:'安卓内侧3.0',
        direction:'top'
    },{
        id:'#ios_app',
        tips:'苹果内侧3.0',
        direction:'top'
    },{
        id:'#source_tv',
        tips:'点击访问美剧在线播放站',
        direction:'top'
    },{
        id:'#window_client',
        tips:'开发中',
        direction:'top',
        size:'m'
    },{
        id:'#ios_client',
        tips:'开发中',
        direction:'top',
        size:'m'
    },{
        id:'#btnOne',
        tips:'手机扫码关注',
        size:'m'
    },{
        id:'#btnTwo',
        tips:'手机扫码关注，电脑点击跳转'
    },{
        id:'#btnThree',
        tips:'手机扫码关注',
        size:'m'
    }]
    //鼠标
    tipConfig.forEach(v=>{
        mouseEvent(v)
    })
   
    
   