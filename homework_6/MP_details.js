
$(document).ready(() => {

// Update when click colors (same for all colors)
document.getElementById('blue').onclick = function() {
  console.log("clicked blue");

  // show selection
  document.getElementsByClassName('main-pic')[0].style.backgroundImage = "url(blue-backpack.png)";
  document.getElementById('blue-dot').style.border = '3px solid black'
  document.getElementById('blue-dot').style.borderRadius = '30px'

  // clear styling for other selections
  document.getElementById('purple-dot').style.border = '0px solid black'
  document.getElementById('pink-dot').style.border = '0px solid black'
  document.getElementById('orange-dot').style.border = '0px solid black'

  // store color selection
  localStorage.setItem("color", "Blue");

}

document.getElementById('pink').onclick = function() {
  console.log("clicked pink");
  document.getElementsByClassName('main-pic')[0].style.backgroundImage = "url(pink-backpack.png)";
  document.getElementById('pink-dot').style.border = '3px solid black'
  document.getElementById('pink-dot').style.borderRadius = '30px'

  document.getElementById('blue-dot').style.border = '0px solid black'
  document.getElementById('purple-dot').style.border = '0px solid black'
  document.getElementById('orange-dot').style.border = '0px solid black'

  localStorage.setItem("color", "Pink");

}

document.getElementById('orange').onclick = function() {
  console.log("clicked orange");
  document.getElementsByClassName('main-pic')[0].style.backgroundImage = "url(orange-backpack.png)";
  document.getElementById('orange-dot').style.border = '3px solid black'
  document.getElementById('orange-dot').style.borderRadius = '30px'

  document.getElementById('blue-dot').style.border = '0px solid black'
  document.getElementById('pink-dot').style.border = '0px solid black'
  document.getElementById('purple-dot').style.border = '0px solid black'

  localStorage.setItem("color", "Orange");

}

document.getElementById('purple').onclick = function() {
  console.log("clicked purple");
  document.getElementsByClassName('main-pic')[0].style.backgroundImage = "url(purple-backpack.png)";
  document.getElementById('purple-dot').style.border = '3px solid black'
  document.getElementById('purple-dot').style.borderRadius = '30px'

  document.getElementById('blue-dot').style.border = '0px solid black'
  document.getElementById('pink-dot').style.border = '0px solid black'
  document.getElementById('orange-dot').style.border = '0px solid black'

  localStorage.setItem("color", "Purple");

}



//Updating when click sizes (same for all sizes)
document.getElementById('tiny').onclick = function() {
  // show selection
  console.log("clicked tiny");
  document.getElementById('tiny').style.border = '3px solid black'

  // remove styling from other selections
  document.getElementById('medium').style.border = '0px solid black'
  document.getElementById('small').style.border = '0px solid black'
  document.getElementById('large').style.border = '0px solid black'

  // Update details
  document.getElementById("size-details").innerHTML = "This size fits pets up to 8 lbs"

  // Store size selection
  localStorage.setItem("size", "Tiny");


}
document.getElementById('small').onclick = function() {
  console.log("clicked small");
  document.getElementById('small').style.border = '3px solid black'

  document.getElementById('medium').style.border = '0px solid black'
  document.getElementById('tiny').style.border = '0px solid black'
  document.getElementById('large').style.border = '0px solid black'

  document.getElementById("size-details").innerHTML = "This size fits pets up to 15 lbs"


  localStorage.setItem("size", "Small");


}
document.getElementById('medium').onclick = function() {
  console.log("clicked medium");
  document.getElementById('medium').style.border = '3px solid black'

  document.getElementById('tiny').style.border = '0px solid black'
  document.getElementById('small').style.border = '0px solid black'
  document.getElementById('large').style.border = '0px solid black'
  document.getElementById("size-details").innerHTML = "This size fits pets up to 25 lbs"


  localStorage.setItem("size", "Medium");

}
document.getElementById('large').onclick = function() {
  console.log("clicked large");
  document.getElementById('large').style.border = '3px solid black'

  document.getElementById('medium').style.border = '0px solid black'
  document.getElementById('small').style.border = '0px solid black'
  document.getElementById('tiny').style.border = '0px solid black'

  document.getElementById("size-details").innerHTML = "This size fits pets up to 40 lbs"


  localStorage.setItem("size", "Large");

}

// On loading, update cart item count
if (localStorage.getItem("totalItems") > 0) {
  var totalItems = localStorage.getItem("totalItems");
  cart = JSON.parse(localStorage.getItem('cart'));
  document.getElementById('quant-icon').innerHTML = totalItems;
} else {
  var cart = [];
}

//Add to bag functionality
document.getElementById('addToBag').onclick = function() {
  console.log("clicked add to bag");

  // store quantity in local storage
  var quant = document.getElementById('fname');
  localStorage.setItem("quantity", quant.value);
  alert("added " + quant.value + " " + localStorage.getItem("size") + " " + localStorage.getItem("color") + " Cat Backpack to bag");

  // After add to bag, clear selections
  document.getElementById('medium').style.border = '0px solid black'
  document.getElementById('small').style.border = '0px solid black'
  document.getElementById('tiny').style.border = '0px solid black'
  document.getElementById('large').style.border = '0px solid black'

  document.getElementById('blue-dot').style.border = '0px solid black'
  document.getElementById('pink-dot').style.border = '0px solid black'
  document.getElementById('orange-dot').style.border = '0px solid black'
  document.getElementById('purple-dot').style.border = '0px solid black'
  document.getElementById("size-details").innerHTML = ""

  document.getElementById('fname').value = 1;

  // Update quantity icon after add to bag
  var iconNum = parseInt(document.getElementById('quant-icon').innerHTML);
  var parsedQuant = parseInt(localStorage.getItem("quantity"));
  totalItems =  iconNum + parsedQuant;
  document.getElementById('quant-icon').innerHTML = totalItems;
  localStorage.setItem("totalItems", totalItems);
  console.log("total items in cart: " + totalItems)

  var newItem = {product: "Cat Backpack", quantity: parsedQuant, size: localStorage.getItem("size"), color: localStorage.getItem("color")}
  console.log(newItem.product + newItem.quantity + newItem.size + newItem.color)
  cart[cart.length]= newItem;
  console.log("cart[1].color " + cart[0].color);
  localStorage.setItem("cart", JSON.stringify(cart));
  storedCart = JSON.parse(localStorage.getItem('cart'));
  console.log(storedCart.length)
  l = storedCart.length-1
  console.log("testing stored cart color: " + storedCart[l].color);
  // console.log("local storage cart length: " + localStorage.getItem('cart').length);

  console.table(cart)
}

})
