$(document).ready(function() {

    const itemContainer = $(".js-products");
    let items;

    function getItems() {
        $.get("/api/items", function(data) {
            //console.log(data);
            items = data;
            initializeRows(data);
            
          });
    }

getItems();

function initializeRows(data) {
    console.log(data);
    data.forEach(item => {
        let img = `<div class="col-lg-6 col-md-6 item-entry mb-4">
                <a href="#" class="product-item md-height bg-gray d-block">
                  <img src="${item.img_url}" alt="Image" class="img-fluid">
                </a>
                <h2 class="item-title"><a href="#">${item.name}</a></h2>
                <strong class="item-price">${item.price}</strong>
              </div>`
    itemContainer.append(img);
    })
}

  
  });
  