const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 7000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);

// Extract styles and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Define your routes
app.use('/', require('./routes')); // You need to create and configure your routes in ./routes

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    } else {
        console.log(`Server is running on port: ${port}`);
    }
});
