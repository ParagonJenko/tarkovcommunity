import { fetchSingleMapData } from "./fetchMapData.mjs";

const offcanvasTitle = document.getElementById("offcanvasLabel");
const offcanvasBody = document.getElementById("offcanvasBody"); 

const myOffcanvas = document.getElementById('offcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
   offcanvasTitle.innerHTML = "";
   offcanvasBody.innerHTML = `<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
})


async function loadOffCanvasWithMap(mapSelected) {

    if(!mapSelected) {
        alert("No map selected");
    }

    const data = await fetchSingleMapData(mapSelected)

    const map = data.data.maps[0];

    if(!map) {
        return false;
    }

    const bossCount = {};

    map.bosses.forEach(boss => {
        const bossName = boss.boss.name;
        bossCount[bossName] = (bossCount[bossName] || 0) + 1;
    });

    const bossSpans = Object.keys(bossCount).map(bossName => {
        if (bossCount[bossName] > 1) {
            return `<span class="badge bg-danger p-1 m-2">${bossName} x${bossCount[bossName]}</span>`;
        } else {
            return `<span class="badge bg-danger p-1 m-2">${bossName}</span>`;
        }
    });

    const mapName = map.name;
    const mapPlayers = map.players;
    const mapraidDuration = map.raidDuration;
    const mapDescription = map.description;
    const mapBosses = bossSpans.join(' ');
    const mapWiki = map.wiki;
    
    return { mapName, mapPlayers, mapraidDuration, mapDescription, mapBosses, mapWiki }
}

async function putCanvasTemplate(mapSelected, isInAPI = false) {

    const mapData = await loadOffCanvasWithMap(mapSelected);

    if(isInAPI || mapData === false) {
        offcanvasTitle.textContent = mapSelected;
        offcanvasBody.innerHTML = `Map is not currently in the API sorry!`;
        return;
    }

    offcanvasTitle.textContent = mapData.mapName;
    
    offcanvasBody.innerHTML = `
     <div class="row text-center m-2">

        <img id="mapImage" src="./assets/maps/${mapData.mapName}.png" alt="" class="w-100 img-fluid rounded mx-auto d-block my-2">

        <div class="col-6">
            <span class="badge bg-info p-2">Players: ${mapData.mapPlayers}</span>
        </div>
        <div class="col-6">
            <span class="badge bg-info p-2">Duration: ${mapData.raidDuration}</span>
        </div>

    </div>
    
    <p>${mapData.mapDescription}</p>

    <div>
        ${mapData.mapBosses} <!-- Join the boss spans into a single string -->
    </div>

    <a href="${mapData.wiki}">See wiki here...</a>
    `
}

export { putCanvasTemplate }