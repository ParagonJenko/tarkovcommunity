/*

Make the alert's dynamic
Schedule alerts in code for a certain UTC datetime

https://getbootstrap.com/docs/5.3/components/alerts/#methods

Idea - make it like a console? 

*/


const events = {
    "halloween": {
        stylingClass: "alert-halloween",
        title: "Halloween event! 👻",
        eventUpdates: [ 
        '🔪 Increased Cultist spawn chances on Shoreline, Woods and Customs',
        '🎃 Jack-o-lantern tactical pumpkin helmet back in the game!',
        '**NEW** Zyrachi on <b>all</b> maps',
        '**NEW** Only <b>one extract per map</b>',
        '**NEW** 100% spawn rate',
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
    }   
};

function displayAlert(event){
    
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

    // Create and append li elements for each list item
    events[event].eventUpdates.forEach(itemText => {
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
    console.log(alertDiv);
}

export { displayAlert }

