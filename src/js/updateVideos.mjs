// Import the required libraries
import axios from 'axios';

// Function to fetch the last 5 YouTube video URLs
async function fetchYouTubeVideos() {

  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY; // Replace with your YouTube Data API key - this is publicly available in the console anyway.

  if(typeof apiKey === "undefined"){
    console.log("Undefined");
  }

  const channelId = 'UC5QGploHhl9_XaxDiHZKamg'; // Replace with your YouTube channel ID
  const BSG_playlistId = 'UULF5QGploHhl9_XaxDiHZKamg';
  const BSG_channelId = 'UC5QGploHhl9_XaxDiHZKamg';
  const TFG_channelId = 'UCA5LtT7kdG1Cts9DeSLdZ5w';

  try {
    // const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`);
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=5&playlistId=${BSG_playlistId}&key=${apiKey}`);

    const videos = response.data.items.map(item => ({
      videoId: item.snippet.resourceId.videoId,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    console.log(videos);

    return videos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

// Function to update the HTML with fetched YouTube videos
async function updateHTMLWithVideos() {
  const videos = await fetchYouTubeVideos();

  videos.forEach((video, index) => {

    const anchor = document.getElementById(`video${index+1}link`);
    const img = document.getElementById(`video${index+1}`);

    console.log(video)

    if (anchor && img) {
      anchor.href = `https://youtube.com/watch?v=${video.videoId}`;
      img.src = video.thumbnail;
    }
  });
}



// Export any functions or values that need to be used in other modules
export { updateHTMLWithVideos };

// Call the function to update the HTML
updateHTMLWithVideos();
