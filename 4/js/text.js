function limitText(params) {
    'use Strict';
    var limitedText;
    // 3. get text
    var originalText = document.getElementById('comments').value;

    // 4. nearest from 100th position
    var lastSpace = originalText.lastIndexOf(' ', 100);

    // 5. 
    limitedText = originalText.slice(0, lastSpace);
    // 6.
    document.getElementById('count').value = originalText.length;

    document.getElementById('result').value = limitedText;
    
    return false;
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = limitText;
}

window.onload = init;