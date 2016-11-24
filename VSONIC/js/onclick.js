/* 
* @Author: Marte
* @Date:   2016-10-12 14:53:55
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-12 14:58:39
*/

window.onload=function(){
    
       


        $("#vs-a").on("click",function(){
            $("html,body").animate({scrollTop:480},500);  
        })
        $("#vs-b").on("click",function(){
            $("html,body").animate({scrollTop:1800},500);  
        })
        $("#vs-c").on("click",function(){
            $("html,body").animate({scrollTop:2370},500);  
        })
        $("#vs-d").on("click",function(){
            $("html,body").animate({scrollTop:1800},500);  
        })
        $("#vs-e").on("click",function(){
            $("html,body").animate({scrollTop:4500},500);  
        })
        $("#vs-f").on("click",function(){
            $("html,body").animate({scrollTop:5500},500);  
        })
    
    
    
    
    
var k=document.getElementById("kl");


window.onscroll = function(){
        if(scroll().top>=500){
            // k.style.position="fixed";
            k.style.top="200px";
        }
       
        else if(scroll().top<500){
                k.style.top="500px";
        }
         console.log(scroll().top);
    }




function scroll(){
    //1.判断，浏览器如果支持window.pageYOffset;那么直接使用
    if(window.pageYOffset != undefined){
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        };
        //2.要看浏览器也面有没有DTD约束。如果没有执行document.body.scrollTop;
    }else if(document.compatMode === "BackCompat"){
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        };
    }
    return {
        top: document.documentElement.scrollTop,
        left: document.documentElement.scrollLeft
    };
}



   

}