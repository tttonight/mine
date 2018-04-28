function ajax(url, fnSucc, fnFaild) {
		/**
		* 1������ajax����
		*/
		
		if(window.XMLHttpRequest) {
			//��ie6
			var oAjax = new XMLHttpRequest();
			//alert(oAjax);
		}else {
			//ie6
			var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		/**
		* 2�����ӵ�������
		*/
		oAjax.open('GET', url,true);
		
		/**
		* 3����������
		*/
		oAjax.send();
		
		/**
		* 4�����շ���ֵ
		*/
		oAjax.onreadystatechange=function() {
			if(oAjax.readyState==4){
				if(oAjax.status==200) {
					fnSucc(oAjax.responseText);
				}else{
					//�жϣ�ֻ�д������ŵ���fnFaild
					if(fnFaild) {
						fnFaild(oAjax.status);
					}
				}
			}
		}
		
		
	}