var conNav = document.getElementsByClassName('con-nav')[0];
window.onscroll = function () {
	var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;


	if(iScrollT > 230) {
		conNav.className = 'fixTop con-nav';
	} else {
		conNav.className = 'con-nav';
	}
}