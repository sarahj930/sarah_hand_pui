$(document).ready(() => {

  // set quantity in cart
  document.getElementById('fname').value =   localStorage.getItem("totalItems");

  // calculate and populate prices
  localStorage.setItem("cat-backpack-price", 52);
  var shipping = parseInt(7.0);
  var subtotal = parseInt(localStorage.getItem("cat-backpack-price"))*parseInt(localStorage.getItem("totalItems"));
  var tax = parseFloat(0.06)*subtotal;
  var total = tax+subtotal+shipping;
  document.getElementById('subtotal').innerHTML = "$" + subtotal;
  document.getElementById('tax').innerHTML = "$" + tax;
  document.getElementById('shipping').innerHTML = "$" + shipping;
  document.getElementById('total').innerHTML = "$" + total;

  // On loading, update cart item count
  if (localStorage.getItem("totalItems") > 0) {
    var totalItems = localStorage.getItem("totalItems");
    document.getElementById('quant-icon').innerHTML = totalItems;
  }
})
