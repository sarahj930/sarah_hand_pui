$(document).ready(() => {

  // load stored cart
  storedCart = JSON.parse(localStorage.getItem('cart'));
  console.log(storedCart.length)
  length = storedCart.length
  console.table(storedCart)


  // For all items in cart, append a representative product image and description to the cart page
  for (i = 0; i < length; i++) {
    var color = storedCart[i].color;
    var size = storedCart[i].size;
    var quantity = storedCart[i].quantity;
    $(".grid-item-info-container").append('<div class="grid-item-info-1" id='+ i +'><div class="grid-item-info" id="b"><strong>Cat Backpack</strong></div><div class="grid-item-info">' + size + '</div><div class="grid-item-info">'+ color + '</div></div>');

    $(".grid-item-info-container").append('<div class="grid-item-info-1"><div class="grid-item-info" id="price">$52</div><form><label for="fname">Quantity </label><input type="text" class="fname" id="fname'+ i +'" name="'+i+'" value='+quantity+'></form><button id='+i+' class="remove">x</button></div>');

    $(".grid-item-sidepics").append('<a href="MP_Detail.html"><div class="grid-item-product-pic"><img src="'+color+'-backpack.png" class="grid-item-product-pic"></div></a>');
  }


  // Remove item from cart when click x button
  $('body').on('click', '.remove', function() {
    var index = this.id;
    var quant = this.previousSibling[0].value;
    console.log(index);
    console.log(quant)
    storedCart.splice(index,1);
    console.table(storedCart);
    var x = localStorage.getItem('totalItems');
    x = x-quant;
    localStorage.setItem('totalItems', parseInt(x));

    localStorage.setItem('cart', JSON.stringify(storedCart));

    location.reload();
  });

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
