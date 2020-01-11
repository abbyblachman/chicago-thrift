$(document).ready(function() {



$(document).on('click', '.remove', function() {
    const item_id = $(this).attr("data-id");
    console.log('hi');
        $.ajax({
          method: "PUT",
          url: "/api/items",
          data: {id: item_id, in_cart: false}
        })
          .then(function() {
            window.location.href = "/cart.html";
          });
     
    });
})

