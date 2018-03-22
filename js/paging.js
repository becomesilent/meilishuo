
var aPage = Array.from(document.getElementsByClassName('page'));
var oComments = document.getElementById('comments');


aPage.forEach( v => {
	v.onclick = function () {

//		// 清空新闻列表
//		oComments.innerHTML = '';

		// 获取页码值
		var page = this.getAttribute('data-page');

		// 第一步：创建XMLHttpRequest对象
		if(window.ActiveXObject) {
			var xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
		} else {
			var xhr = new XMLHttpRequest();
		}

		var param = 'page=' + page;

		// 第二步：请求配置
		xhr.open('get', '../php/paging.php?page=' + page, true);
//		xhr.open('post', '1.php', true);

		// 设置请求头
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		// 第三步：发送请求
		xhr.send(param);

		// 第四步：接收后台返回的数据
		xhr.onreadystatechange = function () {
			if( xhr.readyState === 4 && xhr.status === 200) {
				var list = JSON.parse(xhr.responseText);

				list.forEach( v => {
					var oLi = document.createElement('div');
					oLi.innerHTML = v.title;

					oComments.appendChild(oLi);
				});

				// 获取数据的XML对象
				// console.log(xhr.responseXML);
			}
		};
	};
});