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
		style : pagerModule.SCROLLING,
		backgroundColor : "#cccccc",
		backgroundColorSelected : "#fff000",
		lineColor : "#00ff00",
		lineColorSelected : "#0000ff",
		lineHeight : 5,
		lineHeightSelected : 10,
		font : {
			size : 16,
			color : "#000fff",
			colorSelected : "#aabbcc"
		},
		padding : {
			left : 20,
			top : 15,
			right : 20,
			bottom : 15
		}
	}
}));
