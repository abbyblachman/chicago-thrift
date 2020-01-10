// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");
const items = require("../db/data.json");
//console.log(items);


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/items/", function(req, res) {
    db.Item.findAll({})
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  app.get("/api/checkout", function(req, res) {
    console.log('in the checkout');
    db.Item.findAll({
      where: {in_cart: true}
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // app.put("/api/items/:id", function(req, res) {

  //   console.log('in the put route');
  //   db.Item.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbItem) {
  //     res.json(dbItem);
  //   });
  // });

  app.put("/api/items", function(req, res) {
    console.log('in');
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItem) {
        console.log('in the then');
      res.json(dbItem);
    });
  });



//   // Get route for returning posts of a specific category
//   app.get("/api/posts/category/:category", function(req, res) {
//     db.Post.findAll({
//       where: {
//         category: req.params.category
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });


  app.get("/api/item/:id", function(req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
//   app.post("/api/posts", function(req, res) {
//     console.log(items);

//     items.forEach(item => {
//         db.Post.create({
//             price: item.price,
//             name: item.name,
//             img_url: item.img_url
//           })
//             .then(function(dbPost) {
//               res.json(dbPost);
//             });
//     })
    
//   });

//   // DELETE route for deleting posts
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

//   // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
 };
