$(document).ready(() => {

// On loading, update cart item count
var totalItems = localStorage.getItem("totalItems");
document.getElementById('quant-icon').innerHTML = totalItems;

})
