import TypeIt from "typeit";

const events = {
    "halloween": {
        stylingClass: "alert-halloween",
        title: "Halloween event! 👻",
        eventUpdates: [ 
        '🔪 Increased Cultist spawn chances on Shoreline, Woods and Customs',
        '🎃 Jack-o-lantern tactical pumpkin helmet back in the game!',
        '**NEW** Zyrachi on <b>all</b> maps',
        '**NEW** Only <b>one extract per map</b>',
        '**NEW** 100% spawn rate of Zyrachi',
        '<a href="https://twitter.com/LogicaISoIution/status/1719058904951484846">🐦 Live tweeted by LogicalSolutions</a>'
        ],
    },
    "christmas": {
        stylingClass: "alert-christmas",
        title: "Test",
        eventUpdates: [
            'Testing Chrismtas',
            'Merry Christmas',
        ],
    },
    "none": {
        stylingClass: "alert-danger",
        title: "This shouldn't be displayed",
        eventUpdates: [
            "This shouldn't be displayed - please contact owner"
        ]
    }
};

async function getAlert(alertType = "terminal", event = "none") {


    switch(alertType){
        case "terminal":
            displayTerminalAlert(event);
            break;
        case "bootstrap":
            displayBootstrapAlert(event);
            break;
        default:
            console.log("Incorrect alert type requested");
            break;
    }
}


function displayTerminalAlert(event) {

    const list = events[event].eventUpdates.reverse();

    // First, select the #alertLocation element using its ID.
    var alertLocation = document.getElementById('alertLocation');

    // Create the HTML structure you want to add.
    var newDiv = document.createElement('div');
    newDiv.className = 'p-3';

    var fakeMenuDiv = document.createElement('div');
    fakeMenuDiv.className = 'fakeMenu';

    var fakeCloseDiv = document.createElement('div');
    fakeCloseDiv.className = 'fakeButtons fakeClose';
    
    // add a click event listener to the div
    fakeMenuDiv.addEventListener('click', function() {
        // newDiv.className = 'visually-hidden';
        newDiv.remove();
    });

    var fakeMinimizeDiv = document.createElement('div');
    fakeMinimizeDiv.className = 'fakeButtons fakeMinimize';

    var fakeZoomDiv = document.createElement('div');
    fakeZoomDiv.className = 'fakeButtons fakeZoom';

    var fakeScreenDiv = document.createElement('div');
    fakeScreenDiv.className = 'fakeScreen';
    fakeScreenDiv.id = 'fakeScreen';

    // Construct the hierarchy by appending the elements.
    fakeMenuDiv.appendChild(fakeCloseDiv);
    fakeMenuDiv.appendChild(fakeMinimizeDiv);
    fakeMenuDiv.appendChild(fakeZoomDiv);

    newDiv.appendChild(fakeMenuDiv);
    newDiv.appendChild(fakeScreenDiv);

    // Append the new elements to the #alertLocation element.
    alertLocation.appendChild(newDiv);
    
    new TypeIt("#fakeScreen", {
    strings: list,
    speed: 25,
    }).go();
}



async function displayBootstrapAlert(event){
    
    // Create a new div element
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-info', events[event].stylingClass, 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');

    // Create the h3 element for the title
    const title = document.createElement('h3');
    title.textContent = events[event].title;

    // Create the button element for closing the alert
    const closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'Close');

    // Create an hr element
    const hr = document.createElement('hr');

    // Create a ul element for the list
    const ul = document.createElement('ul');

    const list = events[event].eventUpdates.reverse();

    // Create and append li elements for each list item
    list.forEach(itemText => {
        const li = document.createElement('li');
        li.innerHTML = itemText;
        ul.appendChild(li);
    });

    // Append all elements to the alertDiv in the desired order
    alertDiv.appendChild(title);
    alertDiv.appendChild(closeButton);
    alertDiv.appendChild(hr);
    alertDiv.appendChild(ul);

    // Append the alertDiv to a container element in your HTML, for example:
    const container = document.getElementById('alertLocation');
    container.appendChild(alertDiv);
}

export { getAlert }

