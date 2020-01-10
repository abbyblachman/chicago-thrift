var mysql = require("mysql");
const items = require("../db/data.json");
const mens = require("../db/mens.json");
const kids = require("../db/kidseed.json");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "2093ftPV",
    database: "thrift"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();
    createMens();
    createKids();
});

function createProduct() {
    console.log("Inserting a new product...\n");

    items.forEach(item => {
        console.log(item);
        connection.query(
            "INSERT INTO items SET ?",
            {
              name: item.name, 
              img_url: item.img_url, 
              price: item.price, 
              category: "Women"  
            }
            ,
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n");
            }
        )
    })
};

function createMens() {
    console.log("Inserting a new product...\n");

    mens.forEach(men => {
        console.log(men);
        connection.query(
            "INSERT INTO items SET ?",
            {
              name: men.title, 
              img_url: men.images, 
              price: men.prices, 
              category: "Men"  
            }
            ,
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n");
            }
        )
    })
};

function createKids() {
    console.log("Inserting a new product...\n");

    kids.forEach(kid => {
        console.log(kid);
        connection.query(
            "INSERT INTO items SET ?",
            {
              name: kid.title, 
              img_url: kid.image, 
              price: kid.price, 
              category: "Kids"  
            }
            ,
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n");
            }
        )
    })
};

// function updateProduct() {
//     console.log("Updating all Rocky Road quantities...\n");
//     var query = connection.query(
//         "UPDATE products SET ? WHERE ?",
//         [
//             {
//                 quantity: 100
//             },
//             {
//                 flavor: "Rocky Road"
//             }
//         ],
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + " products updated!\n");
//             // Call deleteProduct AFTER the UPDATE completes
//             deleteProduct();
//         }
//     );

//     // logs the actual query being run
//     console.log(query.sql);
// }

// function deleteProduct() {
//     console.log("Deleting all strawberry icecream...\n");
//     connection.query(
//         "DELETE FROM products WHERE ?",
//         {
//             flavor: "strawberry"
//         },
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + " products deleted!\n");
//             // Call readProducts AFTER the DELETE completes
//             readProducts();
//         }
//     );
// }

// function readProducts() {
//     console.log("Selecting all products...\n");
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err) throw err;
//         // Log all results of the SELECT statement
//         console.log(res);
//         connection.end();
//     });
// }
