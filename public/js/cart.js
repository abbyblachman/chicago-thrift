$(document).ready(function() {

$(document).on('click', '.buy-now', function(){ 
    updatePost();
});

const item_id = window.location.pathname.split("/").pop();


function updatePost() {
    $.ajax({
      method: "PUT",
      url: "/api/items",
      data: {id: item_id, in_cart: true}
    })
      .then(function() {
        window.location.href = "/cart.html";
      });
  }
});


