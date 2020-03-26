# ChicaCoat

The goal of this project is to create an application where a user can search and find locally sold, gently-used coats for both men, women, and kids at a reasonable price.
GIVEN a user who wants to find a locally sold coat, WHEN the user searches a category, THEN the application will return a database of coats that are currently being sold by customers across the Chicago area.

This project uses a MySQL database and Node JS for its backend. Express is used for the middleware. The frontend is written in JQuery. 

## Starting the app locally

Once you clone the app and change directories into the root of the project. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
node server
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.
