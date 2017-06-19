var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

const path = require('path');
app.use(express.static(path.join(__dirname,'/public/dist')));


require("./server/config/mongoose_setup.js");
require('./server/config/routes.js')(app);


app.listen(1337, function() {
    console.log("listening on port 1337");
})