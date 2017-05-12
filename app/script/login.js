		//输入框小符号
		function cuowu1(){
			$("#text1").val(" ").focus();
		}
		function cuowu2(){
			$("#text2").val(" ").focus();
		}
		function cuowu3(){
			$("#text3").val(" ").focus();
		}
	//密码框开关	
		function kaiguan(){
			$("#kaiguan1").css('visibility','hidden');
			$("#kaiguan3").css('visibility','visible');
		}
		function kaiguan2(){
			$("#kaiguan1").css('visibility','visible');
			$("#kaiguan3").css('visibility','hidden');
}
	
//验证码		
 var code;
    function createCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('code');
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G',
        'H','I','J','K','L','M','N','O','P','Q','R', 'S','T',
        'U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index]; 
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.value = code;
    }


    window.onload = function (){

        createCode();
    }
		