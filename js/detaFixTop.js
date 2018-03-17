var conlNav = document.getElementsByClassName('col-nav')[0];
var shopName  = document.getElementsByClassName('shop-names')[0];
var cartHd  = document.getElementsByClassName('cart-hd')[0];
var extranavBd  = document.getElementsByClassName('extranav-bd')[0];
/*
	吸顶效果
*/
window.onscroll = function () {
	var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;

	// 吸顶
	if(iScrollT > 1037) {
		conlNav.className = 'fixTop col-nav';
		shopName.className = 'fixTop shop-names fixTopNames';
		cartHd.className = 'fixTop cart-hd';
		extranavBd.className = 'fixTopExt extranav-bd';
	} else{
		conlNav.className = 'col-nav';
		shopName.className = 'shop-names';
		cartHd.className = 'cart-hd';
		extranavBd.className = 'extranav-bd';
	}
}