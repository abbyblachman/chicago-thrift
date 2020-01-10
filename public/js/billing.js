$(document).ready(function() {

    const checkoutDisplay = $('.order-summary');
    
    function getItems() {
    
    $.get("/api/checkout", function(data) {
        var total = 0;
        data.forEach(item => {
            var div = `<tr>
            <td>${item.name} <strong class="mx-2">x</strong> 1</td>
            <td>${item.price}</td>
          </tr>`;
          total += parseInt(item.price.replace("$", ""));
          checkoutDisplay.append(div);
        }) 
        $('.order-total').text('$' + total);   
    })
    }
    
    getItems();
    
    });