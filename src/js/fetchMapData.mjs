/*

API data pulled from https://tarkov.dev/api/

*/

async function fetchAllMapData() {
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

async function fetchSingleMapData(map) {
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
                        maps (name: "${map}") {
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

export { fetchAllMapData, fetchSingleMapData }