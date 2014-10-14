var pagerData = [{
	title : "First tab",
	view : Alloy.createController('tab').getView()
}, {
	title : "Second tab",
	view : Alloy.createController('tab').getView()
}, {
	title : "Third tab",
	view : Alloy.createController('tab').getView()
}, {
	title : "Fourth tab",
	view : Alloy.createController('tab').getView()
}];

var pagerModule = require("net.bajawa.pager");

$.myWin.add(pagerModule.createViewPager({
	data : pagerData,
	tabs : {
		style : pagerModule.NORMAL
	},
	indicator : {
		style : pagerModule.LINE
	}
}));
