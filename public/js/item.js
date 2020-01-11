$(document).ready(function() {

const itemDisplay = $('.shop-item');

    
    function getItems() {
    var url = $(location).attr('href'),
    parts = url.split("/"),
    last_part = parts[parts.length-1];
    console.log(last_part);

        $.get("/api/item/" + last_part, function(data) {
            const div = `
            <div class="col-md-6">
            <div class="item-entry">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img src="${data.img_url}" alt="Image" class="img-fluid">
              </a>
              
            </div>

          </div>
          <div class="col-md-6 shop-item">
            <h2 class="text-black">${data.name}</h2>
            <p><strong class="text-primary h4">${data.price}</strong></p>
            <p class="text-primary">Want to add to cart? Fill out your info:</p>
            <form class="user-info" method='POST' action='http://localhost:8080/cart.html'>
            <div><input type="text" name="a" value="First name" id="a"></div>
            <div><input type="text" name="b" value="Last name" id="b"></div>
              <input class="buy-now btn btn-sm height-auto px-4 py-3 btn-primar"onclick="window.location.href = 'http://localhost:8080/cart.html';" type="submit" name="g" value="Add to Cart" id="g">
            </div>
          </form>
            

          </div>
          <!--stop-->
        </div>`;
        itemDisplay.append(div);
          });
    }
getItems();

$('.category').on('click', function() {
  const category = $(this).attr('data-category');
  console.log(category);
  $.get("/api/items/category/" + category, function(data) {
    console.log(data);
    const div = `
    <div class="col-md-6">
    <div class="item-entry">
      <a href="#" class="product-item md-height bg-gray d-block">
        <img src="${data.img_url}" alt="Image" class="img-fluid">
      </a>
      
    </div>

  </div>
  <div class="col-md-6 shop-item">
    <h2 class="text-black">${data.name}</h2>
    <p><strong class="text-primary h4">${data.price}</strong></p>
    <p><a href="" class="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart</a></p>

  </div>
  <!--stop-->
</div>`;
itemDisplay.html(div);

  })


})

})