/*var tableData = [{
 title : '"Vanilla" ViewPager',
 opts : {
 data : pagerData,
 tabs : {
 style : pagerModule.NONE
 }
 }
 }, {
 title : '"Vanilla" ViewPager w/ indicator',
 opts : {
 data : pagerData,
 tabs : {
 style : pagerModule.NONE
 },
 indicator : {
 style : pagerModule.LINE
 }
 }
 }, {
 title : '"Vanilla" ViewPager w/ custom indicator',
 opts : {
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
 }
 }, {
 title : 'ViewPager w/ fixed tabs',
 opts : {
 data : pagerData,
 tabs : {
 style : pagerModule.NORMAL
 }
 }
 }, {
 title : 'ViewPager w/ fixed tabs and indicator',
 opts : {
 data : pagerData,
 tabs : {
 style : pagerModule.NORMAL
 },
 indicator : {
 style : pagerModule.LINE
 }
 }
 }, {
 title : 'ViewPager w/ fixed tabs and custom styling',
 opts : {
 data : pagerData,
 tabs : {
 style : pagerModule.NORMAL,
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
 left : 0,
 top : 15,
 right : 0,
 bottom : 15
 }
 }
 }
 }, {
 title : 'ViewPager w/ scrolling tabs',
 opts : {
 data : pagerDataScrolling,
 tabs : {
 style : pagerModule.SCROLLING
 }
 }
 }, {
 title : 'ViewPager w/ scrolling tabs and indicator',
 opts : {
 data : pagerDataScrolling,
 tabs : {
 style : pagerModule.SCROLLING
 },
 indicator : {
 style : pagerModule.LINE
 }
 }
 }, {
 title : 'ViewPager w/ scrolling tabs and custom styling',
 opts : {
 data : pagerDataScrolling,
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
 }
 }, {
 title : 'ViewPager w/ market tabs',
 opts : {
 data : pagerDataScrolling,
 tabs : {
 style : pagerModule.MARKET
 }
 }
 }, {
 title : 'ViewPager w/ market tabs and custom styling',
 opts : {
 data : pagerDataScrolling,
 initialPage : 1,
 tabs : {
 style : pagerModule.MARKET,
 backgroundColor : "#3b3b3b",
 lineHeight : 0,
 lineHeightSelected : 0,
 font : {
 size : 18,
 color : "#91a438",
 colorSelected : "#91a438"
 },
 padding : {
 // top: 20,
 bottom : 15,
 // title: 40,
 clip : -10
 }
 }
 }
 }];*/

function onItemClick(e) {
	Alloy.createController('viewpager_' + e.itemIndex).getView().open();
}

$.index.open();
