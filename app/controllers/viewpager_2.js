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
		style : pagerModule.NONE
	},
	indicator : {
		style : pagerModule.LINE,
		height : 5,
		color : "#91a438",
		fadeOutTime : 100,
		fadingDuration : 1000
	}
}));
