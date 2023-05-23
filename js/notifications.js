/*

Types:
- primary, secondary, success, danger, warning, info, light, dark

Content: What should be in the alert.

<a href="#" class="alert-link">an example link</a>
*/

function displayNotifications(elementId, type = 'info', content = 'Oh no! Looks like there isn\'t anything here, sorry!') {
    document.getElementById(elementId).innerHTML += `<div class='alert alert-`+type+` alert-dismissible fade show m-3' role='alert'>
        `+content+`
        <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
    </div>`;
}

