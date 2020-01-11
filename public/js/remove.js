$(document).ready(function() {



$(document).on('click', '.remove', function() {
    const cart_id = $(this).attr("data-cartid");
    console.log(cart_id);
    console.log('hi');
        $.ajax({
          method: "DELETE",
          url: "/api/cart/" + cart_id,
        })
          .then(function() {

            window.location.href = "/cart.html";
          });
     
    });
})

