function calculate() {
    'use strict';
    var volume;
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);  
    // 5 calc volume
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;

    return false;
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
}
window.onload = init;