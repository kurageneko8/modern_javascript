
// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';
	var total;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;

    total = quantity * price;

    tax = 1 + tax/100;// 100 per cent
    total *= tax;

    total -= discount;
    total = total.toFixed(2);
	document.getElementById('total').value = total;
    return false;
}

function init() {
    'use strict';
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;
}

window.onload = init;