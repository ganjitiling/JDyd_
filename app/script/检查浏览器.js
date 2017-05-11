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