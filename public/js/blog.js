$(document).ready(function() {

    const itemContainer = $(".blog-container");
    let items;

    function getItems() {
        $.get("/api/items", function(data) {
            console.log(data);
            items = data;
            initializeRows(data);
            
          });
    }

getItems();

function initializeRows(data) {
    data.forEach(data => {
        let item = $('<div>');
        item.text(data.name);
        let price = $('<div>');
        price.text(data.price);
        let img = $(`<div><img style="width:100px;height:100px;"src="${data.img_url}" alt = "${data.name}"/></div>`)
    itemContainer.append(item).append(price).append(img);
    })
}

  
  });
  