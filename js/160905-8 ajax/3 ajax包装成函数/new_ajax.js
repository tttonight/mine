function ajax(url, fnSucc, fnFaild) {
		/**
		* 1、创建ajax对象
		*/
		
		if(window.XMLHttpRequest) {
			//非ie6
			var oAjax = new XMLHttpRequest();
			//alert(oAjax);
		}else {
			//ie6
			var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		/**
		* 2、连接到服务器
		*/
		oAjax.open('GET', url,true);
		
		/**
		* 3、发送请求
		*/
		oAjax.send();
		
		/**
		* 4、接收返回值
		*/
		oAjax.onreadystatechange=function() {
			if(oAjax.readyState==4){
				if(oAjax.status==200) {
					fnSucc(oAjax.responseText);
				}else{
					//判断，只有传进来才调用fnFaild
					if(fnFaild) {
						fnFaild(oAjax.status);
					}
				}
			}
		}
		
		
	}