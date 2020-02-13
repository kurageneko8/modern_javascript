 function process() {
     'use strict';

    //  3 get refferecne
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var output = document.getElementById('output');

    // 4 declare message
    var message = '';
    var interval = '';
    var day = 1000 * 60 * 60 * 24;
    // 5 create 2 Date obj
    var startDate = new Date(start.value);
    var endDate = new Date(end.value);

    // 6 validation
    if (startDate.getTime() && endDate.getTime()) {
        // 7
        if (startDate < endDate) {
            // 8 get interval
            var diff = endDate - startDate;
            if (diff <= day) {
                interval = '1 day';
            } else {
                interval = Math.round(diff/day) + ' days';
            }
            // 9 create message
            message = 'event start ' + startDate.toLocaleDateString();
            message += ' and end is ' + endDate.toLocaleDateString();
            message += '. interval is ' + interval;
            
        } else {
            message = 'start date must be earlier than end date!';
        }
    } else {
        message = 'start and end date must be MM/DD/YYYY format';
    }

    // 11 custom message
    if (output.textContent !== undefined) {
        output.textContent = message;
    } else {
        output.innerText = message;
    }

    return false;
 }

 function init() {
     'use strict';
     document.getElementById('theForm').onsubmit = process;
 }
 window.onload =init;