$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        clientId: '3c2c3b2d94a74bd68038371ebb78453f',
		accessToken: '1858194.1677ed0.0debecd6b9994607991c7124ef2712b7',
        target: 'instafeed',
        get: 'user',
		userId: '1858194',
        // tagName: 'drag',
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a target="_blank" href="{{link}}"><img src="{{image}}" class="img-responsive"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
 	
    var username = "hashtag";
    var hostname = "trashly.fish";
	$('.contact-now-btn').attr('href', "mail" + "to:" + username + '@' + hostname + "?Subject=Hay%20gurl");
	
	// $.getJSON('https://api.twitch.tv/kraken/streams/dragtrashly', function(channel) {
	//
	//     if (channel["stream"] == null) {
	//         window.alert("nie wow");
	//
	//     } else {
	//         window.alert("wow");
	//
	//     }
	// });
});

function drawChart(restSearchData) {
	
}