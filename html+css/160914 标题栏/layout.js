/**javascript*/
// window.onload=function() {
// var oLi=document.getElementsByTagName("li");
// console.log(oLi[0]);
// for(var i=0; i<oLi.length; i++) {
	// oLi[i].onmousemove=function() {
		// for(var i=0;i<oLi.length;i++) {
			// oLi[i].style.cursor="pointer";
		// }
	// };
// }
// };

/**jquery*/
$(document).ready(function() {
	//li:not('.tiao') --- 选择li中除了class为tiao的，注意，li和:not不能有空格
	$.each($("li:not('.tiao')"), function() {
		$(this).mouseover(function() {
			$(this).css("cursor", "pointer");
			$(this).addClass("change");
			//console.log(this);
		});
		
		$(this).mouseout(function() {
			$(this).removeClass("change");
		});
	});
});