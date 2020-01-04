const fs = require('fs');
const Item = require('./models/items');

fs.readFile('./db/data.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } 
    
    let insert = JSON.parse(data);

    let i = 0; 

    insert.forEach(function(item) {
        item["id"] = i++;
        console.log(item);
    })

// now we need to take the newly created array of objects and insert it into the database 

    

});

