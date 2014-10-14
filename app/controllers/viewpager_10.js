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
	initialPage : 1,
	tabs : {
		style : pagerModule.MARKET,
		backgroundColor : "#3b3b3b",
		lineHeight : 0,
		lineHeightSelected : 0,
		font : {
			size : 18,
			color : "#91a438",
			colorSelected : "#91a438",
		},
		padding : {
			// top: 20,
			bottom : 15,
			// title: 40,
			clip : -10,
		}
	}
}));
