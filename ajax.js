		/*		//1.创建ajax对象
				
				// var oAjax = new XMLHttpRequest();  //创建ajax对象
				if (XMLHttpRequest) {
					var oAjax = new XMLHttpRequest(); 
				}
				else{
					var oAjax = new ActiveXObject("Microsoft.XMLHTTP"); //IE6
				}
				// alert(oAjax);
				//2.连接服务器
				oAjax.open('GET','a.txt',true);  //true 代表异步
				//3.向服务器发送请求
				oAjax.send();
				//4.接受返回值
				oAjax.onreadystatechange = function(){   
				//此事件与服务器发生交互时才发生，什么时候把值返回到什么时候才执行此函数。
					if (oAjax.readyState == 4) {
						//读取完成，但不知道成败与否；
						if (oAjax.status == 200) {
							//读取成功；
							 alert("成功："+oAjax.responseText);
						}
						else{
							 alert("失败"+oAjax.status);
						}
					}
				}
*/


				function ajax(url,fnSucc,fnFaild){
					//1.创建ajax对象
					// var oAjax = new XMLHttpRequest();  //创建ajax对象
				if (XMLHttpRequest) {
					var oAjax = new XMLHttpRequest(); 
				}
				else{
					var oAjax = new ActiveXObject("Microsoft.XMLHTTP"); //IE6
				}
				// alert(oAjax);
				//2.连接服务器
				oAjax.open('GET',url,true);  //true 代表异步
				//3.向服务器发送请求
				oAjax.send();
				//4.接受返回值
				oAjax.onreadystatechange = function(){   
				//此事件与服务器发生交互时才发生，什么时候把值返回到什么时候才执行此函数。
					if (oAjax.readyState == 4) {
						//读取完成，但不知道成败与否；
						if (oAjax.status == 200) {
							//读取成功；
							 // alert("成功："+oAjax.responseText);
							 fnSucc(oAjax.responseText);
						}
						else{

							if (fnFaild) {
								fnFaild("失败"+oAjax.status);
							}
							 // alert("失败"+oAjax.status);
						}
					}
				}
			}