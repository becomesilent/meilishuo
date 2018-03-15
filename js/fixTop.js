var conNav = document.getElementsByClassName('con-nav')[0];
var goTop  = document.getElementsByClassName('goTop')[0];

/*
	吸顶效果
*/
window.onscroll = function () {
	var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;

	// 吸顶
	if(iScrollT > 230) {
		conNav.className = 'fixTop con-nav';
	} else {
		conNav.className = 'con-nav';
	}
	
	// 返回顶部
	if(iScrollT > 0) {
		goTop.style.display = 'block';
		goTop.onclick = function() {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	}
}