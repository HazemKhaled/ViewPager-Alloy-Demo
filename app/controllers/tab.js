var IMAGES1 = ['http://pbs.twimg.com/profile_images/438421864612773888/7pgrv0mz_bigger.jpeg', 
'http://pbs.twimg.com/profile_images/516648519847780352/QoUnuHWr_bigger.jpeg', 
'http://pbs.twimg.com/profile_images/513346155984330752/vMW9JOFw_bigger.png', 
'http://pbs.twimg.com/profile_images/506889062481813506/AV9LjOM8_bigger.png', 
'http://pbs.twimg.com/profile_images/520169483693195264/a1ji0qQc_bigger.jpeg'];

var IMAGES = ['http://pbs.twimg.com/profile_images/1423351727/Profile_small_bigger.jpg', 
'http://pbs.twimg.com/profile_images/2244448635/image_bigger.jpg', 
'http://pbs.twimg.com/profile_images/3609047093/4169fbb492c9655bdfc83ccbf4f676b8_bigger.png', 
'http://pbs.twimg.com/profile_images/378800000443669396/b4e5f4bb88674441e18eeb39765f55eb_bigger.jpeg',
'http://pbs.twimg.com/profile_images/502837300897009666/rdOU9KI9_bigger.jpeg'];

var moreItems = [],
    lastPos = 'left',
    imageCtr = 0,
    imageCtr1 = 0,
    isec = 0,
    sections = [];

for (var is = 1; is <= 2; is++) {

	var headerView = Ti.UI.createView({
		height : 50,
		backgroundColor : "silver"
	});

	headerView.add(Ti.UI.createImageView({
		image : IMAGES1[imageCtr++],
		left : 10
	}));

	headerView.add(Ti.UI.createLabel({
		text : "Section " + is,
		right : 10,
		color : "#ffffff"
	}));

	var section = Ti.UI.createListSection({
		//headerTitle: "Section number " + is,
		headerView : headerView
	});

	for (var i = 0; i < 50; i++) {
		// gradual increase to red
		var hex = (i % 256).toString(16);
		if (hex.length < 2) {
			hex = '0' + hex;
		}

		// Use a different template every other row
		if (i % 2) {
			moreItems.push({
				template : 'requiredTemplate',
				leftImage : {
					image : IMAGES[imageCtr++]
				},
				rightImage : {
					image : i % 5 ? 'http://pbs.twimg.com/profile_images/1554448102/Wamda-2.0-Profile_bigger.jpg' : 'http://pbs.twimg.com/profile_images/378800000554586569/79ea6d71ef8e1dea3f04dcd627eff8db_bigger.png'
				},
				title : {
					text : (i * is) + ' This is my title' + (i % 5),
					color : "#" + hex + "0000"
				},
				subtitle : {
					text : 'And this is the subtitle'
				},
				properties: {
					backgroundColor: 'red'
				}
			});
			if (imageCtr >= IMAGES.length) {
				imageCtr = 0;
			}
		} else {
			var textAlign = lastPos === 'left' ? ( lastPos = 'right') : ( lastPos = 'left');
			moreItems.push({
				template : 'template2',
				image : {
					image : IMAGES1[imageCtr1++]
				},
				text: {
					text: IMAGES1[imageCtr1++]
				}
			});
			if (imageCtr1 >= IMAGES1.length) {
				imageCtr1 = 0;
			}
		}
	}
	section.items = moreItems;
	moreItems = [];
	sections.push(section);
}
$.list.sections = sections;

