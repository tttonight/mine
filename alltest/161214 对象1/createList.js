var createList = function() {
	this.oDiv = document.createElement("div");
	this.initialize.apply(this,arguments);
}

createList.prototype = {
	/*初始化*/
	initialize:function(aData) {
		var oDl,oDt,oDd,i,j,
			aData_length = aData.length;
		//将dt、dd加入到dl中
		for(i=0; i<aData_length; i++) {
			oDl = document.createElement("dl");
			project = aData[i].project;
			for(j=0; j<project.length; j++) {
				if(project[j].href === undefined) {
					oDt = document.createElement("dt");
					oDt.innerHTML = project[j].text+"("+(project.length-1)+")";
					oDl.appendChild(oDt);
				}else {
					oDd = document.createElement("dd");
					oDd.innerHTML = "<a href=\""+project[j].href+"\" target=\"blank\"> "+j+") "+project[j].text+"</a>";
					oDl.appendChild(oDd);
				}
			}
			this.oDiv.appendChild(oDl);
		}	
		this.oDiv.id="wrap";	
		document.body.appendChild(this.oDiv);
	},
	click:function() {
		var that = this;
		this.oDiv.onclick = function(ev) {
			var oEvent, oTarget, oParent,i;
			oEvent = ev||event;
			//获得对象，target是火狐下的属性，srcElement是IE下的属性,tagName即可获得标签名
			oTarget = oEvent.target || oEvent.srcElement;
			//获得oTarget的父级
			oParent = oTarget.parentElement || oTarget.parentNode;
			oP = oParent.parentElement || oParent.parentNode;
			// console.log(oTarget.tagName); //当前 dt
			// console.log(oParent.nodeName);//父级 dl
			// console.log(oP.nodeName);//父级 div
			//dl dt dd
			if(oTarget.tagName === "DT") {
				
			}
		}	
	},
	show: function(obj,callback) {
		for(var i=0; i<obj.children.length; i++) {
			obj.children[0].style.background ="#33A6B8";
			obj.children[i].style.display = "block";
		}	
		callback && callback.call(obj);
	},
	hide: function(obj) {
		for(var i=1; i<obj.length; i++) {
			obj[0].style.background ="#F4A7B9";
			obj[i].style.display = "none";
		}	
	}
}