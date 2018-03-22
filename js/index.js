
window.onload = function () {
	
	var conNav = document.getElementsByClassName('con-nav')[0];
    ceiling(conNav) /*调用吸顶函数  */
       
       
       
       
	let oBox   	   = document.getElementById('box');
	let aPanel 	   = Array.from(oBox.children);
	const iPanelW  = aPanel[0].offsetWidth; // 记录列的宽度
	const iPanelH  = aPanel[0].offsetHeight;
	const iImgW    = 220;


	// 计算最多容纳列数
	let iWinW   = document.documentElement.clientWidth;
	let iWinH   = document.documentElement.clientHeight;
	let iMaxCol = Math.floor(iWinW / iPanelW);



	// 记录每一列的高度
	let aColH = [];

	// 遍历指定位置
	aPanel.forEach((v, k) => {
		// 如果当前panel为第一排，则top为0
		if(k < iMaxCol) {
			v.style.top = 0;
			v.style.left = k * iPanelW +'px';

			// 记录每一列的高度
			aColH.push(v.offsetHeight);
		} else {
			// 寻找最矮列的高度值和下标
			var iMinH = Math.min(...aColH);
			var iMinK = aColH.indexOf(iMinH);


			// 指定位置
			v.style.left = iMinK * iPanelW + 'px';
			v.style.top  = iMinH + 'px';

			// 更新列的高度
			aColH[iMinK] += v.offsetHeight;

		}
		
		
	});


	// 滚动加载新的数据
	var loadOK = true; // 可以加载新的数据
	window.onscroll = function () {
		let iScrollT = document.body.scrollTop || document.documentElement.scrollTop;
		let oLastPanel = aPanel[aPanel.length - 1];
		if(loadOK && (iWinH + iScrollT > oLastPanel.offsetTop + oLastPanel.offsetHeight / 2)) {
			loadOK = false;
			// 加载新的数据
			data.forEach(v => {
				let oNewPanel = document.createElement('div');
				oNewPanel.className = 'items';
				
				/*// 创建a
				let oA = document.createElement('a');
				console.log(oA);
				oA.className = 'item-img';
				oNewPanel.appendChild(oA);*/
				
				
				
				
				

				oNewPanel.innerHTML = `<a href="details.html" class="item-img"
					 target="_blank"><img src="`+ v.url +`"/></a>
				<div class="item-money clear">
					<div class="price">￥1111.11</div>
					<div class="collect"><img src="../img/collect.png"/>4548</div>
				</div>
				<a href="details.html" class="details"  target="_blank"><img src="../img/optimization.png"/>夏韩版单排扣半身裙高腰显瘦牛仔裙a字防走光裤裙简约短裙子女潮</a>`;
				
				
				
				
				// 计算图片等比缩放后实际的高度
				// 公式：iActualW / iActualH = iScaleW / iScaleH
				let iImgH = v.height * iImgW / v.width;
				

				
				oBox.appendChild(oNewPanel);

				// 寻找最矮列的高度值和下标
				var iMinH = Math.min(...aColH);
				var iMinK = aColH.indexOf(iMinH);

				oNewPanel.style.left = iMinK * iPanelW +'px';
				oNewPanel.style.top = iMinH + 'px';

				// 更新列的高度
				aColH[iMinK] += oNewPanel.offsetHeight;
				oBox.style.height = aColH[iMinK] + 'px';
			});

			// 更新最后的列
			aPanel = Array.from(oBox.children);
			
			// 打开开关
			loadOK = true;
		} 
	};

	window.onresize = function () {
		// 更新视窗的宽度和高度
		iWinW   = document.documentElement.clientWidth;
		iWinH   = document.documentElement.clientHeight;

		// 更新列数
		iMaxCol = Math.floor(iWinW / iPanelW);

		// 更新box的宽度
		oBox.style.width = iMaxCol * iPanelW + 'px';
		oBox.style.height = iMaxCol + iPanelH + 'px';

		// 重新排版
		aColH = [];

		// 遍历指定位置
		aPanel.forEach((v, k) => {
			// 如果当前panel为第一排，则top为0
			if(k < iMaxCol) {
				v.style.top = 0;
				v.style.left = k * iPanelW + 'px';

				// 记录每一列的高度
				aColH.push(v.offsetHeight);
			} else {
				// 寻找最矮列的高度值和下标
				var iMinH = Math.min(...aColH);
				var iMinK = aColH.indexOf(iMinH);

				// 指定位置
				v.style.left = iMinK * iPanelW + 'px';
				v.style.top  = iMinH + 'px';

				// 更新列的高度
				aColH[iMinK] += v.offsetHeight;
				
			}
			
		});
	};
};


const data = [
	{
		url: '../img/items2.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items2.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items2.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items2.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items2.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items3.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items3.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items3.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items3.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items3.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items4.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items4.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items4.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items4.jpg',
		width: 224,
		height: 340,
	},
	{
		url: '../img/items4.jpg',
		width: 224,
		height: 340,
	}
	
];