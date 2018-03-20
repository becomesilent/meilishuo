//正则判断
function checked(){
	//账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间
	//或者是手机号
	var checkFlag = false;
	/*document.getElementById("userName").onblur = checkUserName; 
	function checkUserName(){
		//1.属性		
	    let regUser = /^[a-zA-Z_]\w{5,14}$/; 
	    let regUserPhone =  /^1(3|4|5|7|8|9)\d{9}$/;  
		let userName = document.getElementById("userName").value;
		//2.方法
		if(userName!=""){
			if((regUser.test(userName)) || ( regUserPhone.test(userName))){
			//if(regUser.test(userName)){
				document.getElementById("cuoTit_userName").style.display = "none";
				// ajaxCheckName();
				return true;
			}else{
				document.getElementById("cuoTit_userName").style.display = "inline-block";
				document.getElementById("cuoTit_userName").innerHTML = "用户名格式不对";
				return false;
			}
		}else{
			document.getElementById("cuoTit_userName").style.display = "block";
			document.getElementById("cuoTit_userName").innerHTML = "用户名不能为空";
			return false;
		};		
	};
*/
	//alert(checkUserName());

    //ajax
	// function ajaxCheckName(){
	// 	$.ajax({
	// 		url:"php/usercheck.php",
	// 		//type:"post",
	// 		data:{"username":$("#userName").val()},
	// 		success:function(data){
	// 		 if(data=="0"){
 //                    checkFlag = true;
 //                    $("#cuoTit_userName").css({display : "block"});
 //                    $("#cuoTit_userName").html("该用户名可用");
 //                  //  isExists = false;
 //                }else{
 //                    checkFlag = false;
 //                    $("#cuoTit_userName").css({display : "block"});
 //                    $("#cuoTit_userName").html("该用户名已存在");
 //                   // isExists = true;
 //                }
	// 		}
	// 	});
	// }

	//密码，可以是数字，字母，下划线，长度在6-15之间
	/*document.getElementById("userPass").onblur =function checkUserPass(){
		//1、属性
		let regUser = /^[0-9a-zA-Z_]\w{5,14}$/; 
	 	let userPass = document.getElementById("userPass").value;
	 	//2、方法
	 	if(userPass!=""){
			if(regUser.test(userPass)){
				document.getElementById("cuoTit_userPass").style.display = "none";
				//checkFlag=true;
				//document.getElementById("msgbox").style.display = "block";
				//ajaxCheckName();
				return true;
			}else{
				document.getElementById("cuoTit_userPass").style.display = "inline-block";
				document.getElementById("cuoTit_userPass").innerHTML = "密码格式不对";
				//checkFlag=false;
				return false;
			}
		}else{
			document.getElementById("cuoTit_userPass").style.display = "block";
			document.getElementById("cuoTit_userPass").innerHTML = "密码不能为空";
			return false;
		};	
	};*/

	//确认密码出现的条件
	/*document.getElementById("userPass").onkeyup = function(){
			document.getElementById("userRePass").style.display = "block";
	}
	//确认密码
	document.getElementById("userRePass").onblur = function(){
		checkUserPass();
	}

	function checkUserPass(){
		//1.属性	 
		let userRePass = document.getElementById("userRePass").value;
		let userPass = document.getElementById("userPass").value;
		//2.方法
		if(userRePass==userPass){
			document.getElementById("cuoTit_userRePass").style.display = "none";
			return true;
		}else{
			document.getElementById("cuoTit_userRePass").style.display = "block";
			document.getElementById("cuoTit_userRePass").innerHTML = "两次密码不一致";
			return false;
		}
	};*/
	
	
	
	
	//手机验证出现条件
	document.getElementById("shouJi").onblur =function (){
		//1、属性
		let regUser = /^1(3|4|5|7|8|9)\d{9}$/; 
		let shouJi = document.getElementById("shouJi").value;
		//2、方法
		if(shouJi!=""){
			if(regUser.test(shouJi)){
				document.getElementById("cuoTit_shouJi").style.display = "none";
				return true;
			}else{
				document.getElementById("cuoTit_shouJi").style.display = "block";
				document.getElementById("cuoTit_shouJi").innerHTML = "手机号格式不对";
				return false;
			}
		}else{
			document.getElementById("cuoTit_shouJi").style.display = "block";
			document.getElementById("cuoTit_shouJi").innerHTML = "手机号不能为空";
			return false;
		}	
	}
	//验证码	判断内容和随机产生的东西是否一致
	document.getElementById("checkMa").onblur = checkUseMa;

	function checkUseMa(){
		//1.属性	
		let checkMa=document.getElementById("checkMa").value;	
		let checkMa_box=document.getElementById("checkMa_box").innerHTML;
		//2.方法
		if(checkMa==checkMa_box){
			document.getElementById("cuoTit_checkMa").style.display = "none";
			return true;
		}else{
			document.getElementById("cuoTit_checkMa").style.display = "block";
			document.getElementById("cuoTit_checkMa").innerHTML = "验证码有误";
			return false;
		}
	};
//
//	//邮件验证出现条件
//	document.getElementById("userEmail").onblur =function checkEmail(){
//		//1、属性
//		let regUser = /^\w+@\w+\.(com|cn|net|cc|com\.cn)$/; 
//		let userEmail = document.getElementById("userEmail").value;
//		//2、方法
//		if(userEmail!=""){
//			if(regUser.test(userEmail)){
//				document.getElementById("cuoTit_userEmail").style.display = "none";
//				//checkFlag=true;
//				//document.getElementById("msgbox").style.display = "block";
//				//ajaxCheckName();
//				return true;
//			}else{
//				document.getElementById("cuoTit_userEmail").style.display = "block";
//				document.getElementById("cuoTit_userEmail").innerHTML = "邮件格式不对";
//				//checkFlag=false;
//				return false;
//			}
//		}	
//	}
//
	

	

	//表单提交条件
	/*$("form").submit( function () {
		console.log(checkUserName());	
		console.log(checkUserPass());	
		console.log(checkUseMa());	
		console.log(checkUserPass());	
		// if(checkUserName() && checkUserPass() && checkUseMa() && checkUserPass()  && checkFlag){
		// 	return true; 
		// }else{
		// 	return false;
		// }
		if(checkUserName() && checkUserPass() && checkUserPass()  && checkFlag){
			return true; 
		}else{
			return false;
		}
	});*/
}