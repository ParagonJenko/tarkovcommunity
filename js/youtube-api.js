// BSG YT ID: UC5QGploHhl9_XaxDiHZKamg
// TFG YT ID: UCA5LtT7kdG1Cts9DeSLdZ5w
// BSG MOST RECENT PLAYLIST: UULF5QGploHhl9_XaxDiHZKamg

// Script Source: https://stackoverflow.com/questions/30081301/getting-all-videos-of-a-channel-using-youtube-api/33767046#33767046

function getJSONData(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    try {
        Httpreq.open("GET", yourUrl, false);
        Httpreq.send(null);
    } catch (ex) {
        alert(ex.message);
    }
    return Httpreq.responseText;
}

/*
function showVideoListChannel(string apikey)

API_KEY = Supplied by Google

*/
function showVideoListChannel(apikey) {
    try {
        var vid = getJSONData("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UULF5QGploHhl9_XaxDiHZKamg&key="+apikey);
        var videoinfo = JSON.parse(vid);
        var videos = videoinfo.items;
        for (var i = 0; i < videos.length - 1; i++) {
            var videoid = videos[i].id.videoId;
            var videotitle = videos[i].snippet.title;
            var videothumbnail = videos[i].snippet.thumbnails;

            console.log(videothumbnail);

            if(videothumbnail.maxres) {
                videothumbnail = videos[i].snippet.thumbnails.maxres.url;
            }
            else {
                videothumbnail = videos[i].snippet.thumbnails.high.url;
            }
            // if(typeof videos[i].snippet.thumbnails.high.url != 'undefined') {
            //     videothumbnail = videos[i].snippet.thumbnails.maxres.url;
            // }
            // else {
            //     videothumbnail = videos[i].snippet.thumbnails.high.url;
            // }

            
            // if(videothumbnail === null) {
            //     videothumbnail = videos[i].snippet.thumbnails.high.url;
            // }

            console.log(videothumbnail);
            console.log(i);
            
            document.getElementById('video'+i).src = videothumbnail;
        }
        
    } catch (ex) {
        alert(ex.message);
    }
}