// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");
const items = require("../db/data.json");
var passport = require("../config/passport");
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
      include: [{
        model: db.Cart,
        where: {UserId: req.session.passport.user.id}
      }]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  

  app.get("/api/items/category/:category", function(req, res) {
    db.Item.findAll({
      where: {category: req.params.category}
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.delete("/api/cart/:id", function(req, res) {
    console.log('heyyyyyyy');
    db.Cart.destroy({
      where: {
        id: parseInt(req.params.id)}
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  })

  app.get("/api/cart", function(req, res) {
    db.Cart.findAll({}).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  

  app.post("/api/cart", function(req, res) {
    // console.log(req.session.passport.user.id);
    // console.log(req.body);
    db.Cart.create({
      UserId: req.session.passport.user.id, 
      ItemId: parseInt(req.body.item_id)
    }).then(function(dbCart) {
      res.json(dbCart);
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

  // app.put("/api/cart", function(req, res) {
  //   console.log('in');
  //   db.Cart.update(
  //     req.body,
  //     {
  //       where: {
  //         last_name: req.body.last_name
  //       }
  //     }).then(function(dbCart) {
  //       console.log('in the then');
  //     res.json(dbCart);
  //   });
  // });



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

  app.get("/api/loggedin", function(req, res) {
    if (req.session.passport) {
      res.json(true);
    } else {
      res.json(false);
    }
  })

  app.put("/api/loggedin/", function(req, res) {
      res.json(req.session.passport === false)
  })

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
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
