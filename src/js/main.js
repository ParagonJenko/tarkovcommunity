import { updateHTMLWithVideos } from './apis/youtube.mjs';
import { putCanvasTemplate } from './showUI.mjs';
import ImageMap from "image-map";
import { initializeTwitchEmbed } from "./apis/twitch.mjs";
import { getAlert } from './alerts/getAlerts.mjs';

// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

ImageMap('img[usemap]');

document.addEventListener("DOMContentLoaded", (event) => {
    // getAlert("terminal", "halloween");
    // Call the function to update the HTML
  updateHTMLWithVideos();
  initializeTwitchEmbed();
});

// Get all the <area> elements in the image map
const areas = document.querySelectorAll('area');

// Add a click event listener to each <area> element
areas.forEach(area => {
    area.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior (e.g., following the href)
        const areaTitle = area.getAttribute('title'); // Get the title attribute
        putCanvasTemplate(areaTitle); // Call the function with the area's title
    });
});

