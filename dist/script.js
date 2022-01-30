(function() {
    'use strict';
    let togglebutton=document.createElement("button");
    let buttonbg=document.createElement("img");
    buttonbg.height=50;
    buttonbg.width=50;
    togglebutton.style.position="fixed";
    togglebutton.style.zIndex="100";
    togglebutton.style.left=0;
    togglebutton.style.bottom=0;
    togglebutton.style.borderRadius="25px";
    togglebutton.style.border="5px solid green";
    togglebutton.style.background="green";
    buttonbg.style.borderRadius="25px";
    buttonbg.src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-police-officer.png"
    togglebutton.appendChild(buttonbg);
    document.body.appendChild(togglebutton);
    var allowed=false;
    togglebutton.onclick=()=>{
        allowed=!allowed;
    }
    let run=function(){
        let stickers=document.getElementsByClassName('_3mPXD');
        if(!allowed){
            for (var i = 0; i < stickers.length; i++) {
                stickers[i].parentElement.style.display="none";
            }
            togglebutton.style.border="5px solid green";
            togglebutton.style.background="green";
        }else{
            for (var j = 0; j < stickers.length; j++) {
                stickers[j].parentElement.style.display="block";
            }
            togglebutton.style.border="5px solid red";
            togglebutton.style.background="red";
        }
    }
    setInterval(run,1000);
})();
