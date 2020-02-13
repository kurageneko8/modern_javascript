function init() {
    'use strict';
    // 3
    var today = new Date();

    // 4
    var message = 'today\'s date is ' + today.toLocaleDateString();
    message += ' and time is ' + today.getHours() + ':' + today.getMinutes();

    // 5
    var output = document.getElementById('output');

    if (output.textContent !== undefined) {
        output.textContent = message;
        
    } else {
        output.innerText = message;
    }
}
window.onload = init;