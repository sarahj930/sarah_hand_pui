$(document).ready(() => {

// On loading, update cart item count
// if (document.getElementById('quant-icon').innerHTML != 0){
// var totalItems = localStorage.getItem("totalItems");
// document.getElementById('quant-icon').innerHTML = totalItems;
if (localStorage.getItem("totalItems") > 0) {
  var totalItems = localStorage.getItem("totalItems");
  document.getElementById('quant-icon').innerHTML = totalItems;
}
})
