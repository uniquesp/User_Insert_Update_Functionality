const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dataretrive', {
  useNewUrlParser: true,        // Use the new URL string parser
  useUnifiedTopology: true,   // Use the new Server Discover and Monitoring engine
  useCreateIndex: true,       // Use createIndex instead of ensureIndex (to address deprecation warning)
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
