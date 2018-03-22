(function ($) {
	// 创建Tab构造函数
	var Tab = function (tab) {
		// 获取选项栏
		var aColNavDiv = tab.find('.col-nav div');

		// 获取所有的module-panel
		var aModulePanel = tab.find('.module-panel');

		aColNavDiv.click(function () {
			var index = $(this).index();

			// 切换菜单
			aColNavDiv.removeClass('common').eq(index).addClass('common');

			// 切换panel
			aModulePanel.removeClass('active').eq(index).addClass('active');
		});
	};

	// 注册成jQuery方法
	$.fn.extend({
		tab: function () {
			this.each(function (k, v) {
				new Tab($(v));
			});
		}
	});
})(jQuery);