$(document).ready(function() {

const item_id = window.location.pathname.split("/").pop();

// var firstName = [];
// var lastName = [];


$(document).on('submit', '.user-info', function(){ 
    // var data = ( $( this ).serializeArray() );
    //     firstName.push(data[0].value);
    //     lastName.push(data[1].value);
        event.preventDefault();
    function updatePost() {
        $.post("/api/cart", {
            item_id: item_id
        })
        .then(function() {
            console.log('rows added');
        })
          .then(function() {
            window.location.href = "/cart.html";
          });
      }
    updatePost();
    });


});