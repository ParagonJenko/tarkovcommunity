import axios from "axios";

const clientId = import.meta.env.VITE_TWTICH_CLIENT_ID; // Your Twitch API client ID
const clientSecret = import.meta.env.VITE_TWITCH_API_KEY;
const grantType = 'client_credentials';
let accessToken = "";

const postData = {
  client_id: clientId,
  client_secret: clientSecret,
  grant_type: grantType,
};

const channelList = ['bstategames', 'evasion_gg', 'HUNTPremier'];
let currentChannelIndex = 0; // Initialize the index to 0

// Gets the OAuth Access Token through the client credentials grant flow 
// https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow
axios.post('https://id.twitch.tv/oauth2/token', null, {
  params: postData,
})
  .then(response => {
    accessToken = response.data.access_token;
  })
  .catch(error => {
    console.error('Error:', error);
  });

function createTwitchPlayer(channel = "bstategames") {
    const embed = new Twitch.Embed("twitch-embed", {
            channel: channel,
            width: "100%",
            height: 480,
            autoplay: false,
            layout: "video",
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        const player = embed.getPlayer();
        checkChannelOnline(channel, player);
    });
}

function checkChannelOnline(channel, player) {
    const apiUrl = `https://api.twitch.tv/helix/streams?user_login=${channel}`;
    
    fetch(apiUrl, {
        method: "GET",
        headers: {
        "Client-ID": clientId, // Replace with your Twitch Client ID
        "Authorization": `Bearer ${accessToken}`, // Replace with your OAuth token
        },
    })
        .then((response) => response.json())
        .then((data) => {
        if (data.data.length > 0) {
            // The channel is online
            console.log("Channel is online");
            player.setChannel(channelToPlay);
        } else {
             // The channel is offline, switch to the next channel in the list
            console.log("Channel is offline, switching to the next channel");
            currentChannelIndex++;
            if (currentChannelIndex < channelList.length) {
                checkChannelOnline(channelList[currentChannelIndex], player)
            } else {
                console.log("All channels are offline.");
                player.setChannel(channelList[0]);
                // player.setChannel(channelList[currentChannelIndex - 1]); // Get the last array item as the final fallback
            }
        }
    })
    .catch((error) => console.error(error));
}

// Start with the first channel in the list
createTwitchPlayer(channelList[currentChannelIndex]);

export { createTwitchPlayer }

