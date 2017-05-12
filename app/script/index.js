    //自己封装的根据不同的浏览器实现滑动效果
    function scroll() {
        //判断当前的浏览器是否是IE9+ 或者其他浏览器
        if (window.pageYOffset != null) {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            };
        }
        //检测是否是怪异模式浏览器，就是没有声明<!DOCTYPE html>
        else if(document.compatMode == "CSS1Compat"){
            //正常模式
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            };
        }
        //怪异浏览器
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        };
    }
   //导航栏布局
	window.onscroll=function(){
		var gd=scroll().top;
		if(gd>500){		
		var s=document.getElementById("header-search");
		var s2=document.getElementById("guanggao1");
			s.className="header-search_fix";
			s2.className="guanggao_guding";
		}else{	
			
			var s=document.getElementById("header-search");
			var s2=document.getElementById("guanggao1");
			s.className="header-search";
			s2.className="guanggao";
		}
	}