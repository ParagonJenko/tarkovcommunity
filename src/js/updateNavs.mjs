/*

API data pulled from https://tarkov.dev/api/

*/

async function fetchMapData() {
    try {
        const response = await fetch('https://api.tarkov.dev/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    {
                        maps {
                            name
                            wiki
                            raidDuration
                            players
                            description
                            wiki
                            bosses {
                                boss {
                                    name
                                    imagePortraitLink
                                }
                            }
                        }
                    }`
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Return the JSON data
    } catch (error) {
        console.error('Error:', error);
        throw error; // You can re-throw the error or handle it as needed
    }
}

// Example usage:
async function outputNav() {
    try {
        const data = await fetchMapData();
        const maps = data.data.maps; // Access the 'maps' array in the response data
        const navbar = document.getElementById("navbar");

        const offcanvasTitle = document.getElementById("offcanvasLabel");
        const offcanvasBody = document.getElementById("offcanvasBody");

        // console.log('Data returned:', maps);
        
        // Rest of your code to process the data
        maps.forEach(map => {
            const mapName = map.name;
            
            if(mapName === "Night Factory"){
                return;
            }
            
            const navItem = document.createElement("a");
            navItem.className = "btn btn-info flex-fill m-2 btn-nav";
            navItem.setAttribute("data-bs-toggle", "offcanvas");
            navItem.setAttribute("href", "#offcanvas");
            navItem.setAttribute("role", "button");
            navItem.setAttribute("aria-controls", "offcanvas");
            navItem.textContent = mapName;
        
 
            navItem.addEventListener("click", () => {
                // Update the offcanvas content when the link is clicked
                offcanvasTitle.textContent = mapName; // Set the title
                // You can set the offcanvas body content as needed
                
                // Create boss spans
                const bossSpans = map.bosses.map(boss => {
                    return `<span class="badge bg-danger p-1 m-2">${boss.boss.name}</span>`;
                });


                offcanvasBody.innerHTML = `
                    <div class="row text-center m-2">

                        <img id="mapImage" src="/${map.name}.png" alt="" class="w-100 img-fluid rounded mx-auto d-block my-2">

                        <div class="col-6">
                            <span class="badge bg-info p-2">Players: ${map.players}</span>
                        </div>
                        <div class="col-6">
                            <span class="badge bg-info p-2">Duration: ${map.raidDuration}</span>
                        </div>

                    </div>
                    
                    <p>${map.description}</p>

                    <div>
                        ${bossSpans.join(' ')} <!-- Join the boss spans into a single string -->
                    </div>

                    <a href="${map.wiki}">See wiki here...</a>
                    
                `;

                
            });

            
            navbar.appendChild(navItem);
            
        });
        
    } catch (error) {
        // Handle any errors here
        console.log(error);
    }
}


export { outputNav }

outputNav();