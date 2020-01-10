$(document).ready(function() {

const checkoutDisplay = $('.checkout-table');

function getItems() {

$.get("/api/checkout", function(data) {
    var total = 0;
    data.forEach(item => {
        var div = `<tr>
        <td class="product-thumbnail">
          <img src="${item.img_url}" alt="Image" class="img-fluid">
        </td>
        <td class="product-name">
          <h2 class="h5 text-black">${item.name}</h2>
        </td>
        <td>${item.price}</td>
        <td><a href="#" class="btn btn-primary height-auto btn-sm">X</a></td>
      </tr>`;
      total += parseInt(item.price.replace("$", ""));
      checkoutDisplay.append(div);
    }) 
    $('.price-total').text('$' + total);   
})
}

getItems();

});