/*

Types:
- primary, secondary, success, danger, warning, info, light, dark

Content: What should be in the alert.

<a href="#" class="alert-link">an example link</a>
*/

let tarkovMaps = {
    "Customs": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9f/Customs_Banner.png",
        description: "A large area of industrial park land situated adjacent to the factory zone. The area houses a customs terminal, fuel storage facilities, offices, and dorms, as well as a variety of other infrastructure and buildings.",
        duration: 40,
        players: "10-12",
        enemyTypes: ["Scavs", "Reshala", "Knight", "Big Pipe", "Birdeye", "Cultists"],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Customs",
        
    },
    "Factory": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1a/Factory-Day_Banner.png",
        description: "The industrial estate and facilities of Chemical Plant No. 16 were rented out illegally to the TerraGroup corporation. During the advent of the Contract Wars, the plant became the scene of numerous firefights between BEAR and USEC that ultimately determined control over the industrial district of Tarkov. Later on, in the wake of the chaos, the plant facilities became a shelter for the remaining civilians, Scavs, and military operatives, including the scattered remains of the BEAR and USEC contingents.",
        duration: 20,
        players: "5-6",
        enemyTypes: ["Scavs", "Tagilla", "Cultists (Night)"],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Factory",
    },
    "Interchange": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3e/Banner_interchange.png",
        description: "The South Interchange is a key transport location for the city. This strategic area connects the port and harbor with the industrial outskirts of Tarkov. Located in the center of the interchange is a huge ULTRA shopping mall which was used as the main base of operation for the EMERCOM evacuation.",
        duration: 40,
        players: "10-14",
        enemyTypes: ["Scavs", "Killa"],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Interchange",
    },
    "Lighthouse": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/dc/Banner_lighthouse.png",
        description: "The lighthouse at Cape Dalniy was an important strategic object on the way to Tarkov. During Contract Wars, it was the main entry point for USEC units and served as their base of operations. After the conflict, Scavs took a fancy to this place, until the old owners returned, who decided to stay in Tarkov and establish their own order.",
        duration: 40,
        players: "9-12",
        enemyTypes: ["Scavs", "Rogues", "Knight", "Big Pipe", "Birdeye", "Zryachiy" ],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Lighthouse",
    },
    "Reserve": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f4/Reserve.png",
        description: "The secret Federal State Reserve Agency base that, according to urban legends, contains enough supplies to last for years: food, medications, and other resources, enough to survive an all-out nuclear war. ",
        duration: 40,
        players: "9-12",
        enemyTypes: ["Scavs", "Scav Raiders", "Glukhar"],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Reserve",
    },
    "Shoreline": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d5/Banner_shoreline.png",
        description: "The Shoreline area makes up a large part of the outskirts of Tarkov and is located next to the Port. The area houses a partially abandoned village, modern private housing, agricultural fields, long stretches of beach, a boating facility, gas station, weather station, and a cellular tower as well as other commercial facilities. Shoreline's main point of interest is the \"Azure Coast\" health resort which consists of several luxurious buildings and facilities. The resort is exclusively powered by a nearby hydroelectric power plant. The resort had previously been used as temporary accommodation for members of TerraGroup and the corporation's associated divisions in preparation for the evacuation of the Tarkov Port.",
        duration: 45,
        players: "10-13",
        enemyTypes: ["Scavs", "Sanitar", "Knight", "Big Pipe", "Birdeye", "Cultists"],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Shoreline",
    },
    "Streets of Tarkov": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/41/Banner_streets.png",
        description: "Downtown Tarkov houses banks, malls, and hotels, as well as all the other amenities a thriving metropolis could have needed.",
        duration: 50,
        players: "12-16",
        enemyTypes: ["Scavs", "Kaban"],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Streets_of_Tarkov",
    },
    "The Lab": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d7/TheLabBanner.png",
        description: "Secret underground TerraGroup Labs facility hidden right under the center of Tarkov. Officially, this research center does not exist and, based on data scraps, is engaged in research and development as well as testing and simulation of projects in chemistry, physics, biology, and other high technology.",
        duration: 35,
        players: "8-10",
        enemyTypes: ["Scav Raiders"],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/The_Lab",
    },
    "Woods": {
        image: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3e/Banner_woods.png",
        description: "The Priozersk Natural Reserve recently became part of the state-protected wildlife reserves of the North Western Federal District.",
        duration: 40,
        players: "10-14",
        enemyTypes: ["Scavs", "Shturman", "Knight", "Big Pipe", "Birdeye", "Cultists"],
        status: "Released",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Woods",
    },
    "Suburbs": {
        image: "",
        description: "The suburb and commuter areas of Tarkov containing all the infrastructure and creature comforts needed for a long and happy life. ",
        duration: null,
        players: "",
        enemyTypes: [""],
        status: "Unreleased",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Suburbs",
    },
    "Terminal": {
        image: "",
        description: "A large section of the harbour zone, rumoured to be the backup Emercom extraction point. ",
        duration: null,
        players: "",
        enemyTypes: [""],
        status: "Unreleased",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Terminal",
    },
    "Town": {
        image: "",
        description: "The Verkhneye urban settlement is a small town by the seaside, favoured by locals as an exceptional gardening and outdoor recreation spot. ",
        duration: null,
        players: "",
        enemyTypes: [""],
        status: "Unreleased",
        wikiLink: "https://escapefromtarkov.fandom.com/wiki/Town",
    },
}

function displayNotifications(elementId, type = 'info', content = 'Oh no! Looks like there isn\'t anything here, sorry!') {
    document.getElementById(elementId).innerHTML += `<div class='alert alert-`+type+` alert-dismissible fade show m-3' role='alert'>
        `+content+`
        <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
    </div>`;
}

function updateOffCanvas(header) {
    document.getElementsByClassName("offcanvas-title")[0].innerHTML = header;

    const map = tarkovMaps[header]
    const image = map.image;
    const description = map.description;
    const duration = map.duration;
    const players = map.players;
    const wikiLink = map.wikiLink;

    document.getElementsByClassName("offcanvas-body")[0].innerHTML = 
    `<img class='img-fluid w-100' src="${image}">

    <div class="d-flex justify-content-around p-3">
    <span class="badge text-bg-info">${duration} minutes</span>
    <span class="badge text-bg-warning">${players} players</span>
    </div>
    <p>${description}</p>
    
    <a href='${wikiLink}' class='float-end'>See wiki...</a>
    `;

    
}