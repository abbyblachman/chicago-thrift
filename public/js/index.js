$(document).ready(function() {

    const menCount = $('.men-count');
    const kidCount = $('.kids-count');
    const womenCount = $('.women-count');
    const allCount = $('.all-count');
    const cartNumber = $('.cart-number');
  
  
 let men = [];
 let women = [];
 let kids = [];
  let all = [];
  let cartCount = [];

  function countCategories() {
    
    $.get("/api/items", function(data) {
    data.forEach(item => {
      if (item.category === 'Men') {
        men.push(item);
      }
      if (item.category === 'Women') {
        women.push(item);
      }
      if (item.category === 'Kids') {
        kids.push(item)
      }
      })
    data.forEach(item => {
      all.push(item);
    })
    data.forEach(item => {
      if (item.in_cart === true) {
        cartCount.push(item);
      }
    })
    menCount.prepend(men.length);
    kidCount.prepend(kids.length);
    womenCount.prepend(women.length);
    allCount.prepend(all.length);
    cartNumber.append(cartCount.length);
    

    })
       
    }


  countCategories();

    const itemContainer = $(".js-products");
    let items;

    function getItems() {
        $.get("/api/items", function(data) {
            console.log('im here');
            items = data;
            initializeRows(data);
            
          });
    }

getItems();

$('.category-all').on('click', function() {
  getItems();
})

function initializeRows(data) {
    console.log(data);
    itemContainer.empty();
    data.forEach(item => {
        let img = `<div class="col-lg-6 col-md-6 item-entry mb-4">
                <a href="${item.id}" data-id="${item.id}">
                  <img src="${item.img_url}" alt="Image" class="img-fluid">
                </a>
                <h2 class="item-title"><a href="#">${item.name}</a></h2>
                <strong class="item-price">${item.price}</strong>
              </div>`
    itemContainer.append(img);
    })
}

// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $('body').on('click', '.item-click', function() {
//   // do something
//   const id = $(this).data("id");
//   console.log(id);
//   $.get("/" + id, function(data) {
//     //console.log(data);
//     showItem(data);
    
//   });
// });


function showItem(data) {
  console.log(data);
}



$('.category').on('click', function() {
  const category = $(this).attr('data-category');
  console.log(category);
  $.get("/api/items/category/" + category, function(data) {
    console.log(data);
    itemContainer.empty();
    data.forEach(item => {
      let img = `<div class="col-lg-6 col-md-6 item-entry mb-4">
              <a href="${item.id}" data-id="${item.id}">
                <img src="${item.img_url}" alt="Image" class="img-fluid">
              </a>
              <h2 class="item-title"><a href="#">${item.name}</a></h2>
              <strong class="item-price">${item.price}</strong>
            </div>`
      itemContainer.append(img);

  })
})

    // Send the PUT request.
   
  });


})  

  