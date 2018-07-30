var app = require('express')();
var http = require('http').Server(app);

app.get('/', (req,res) => {
  res.send("<h1>Hello World!<h1>")
});

http.listen(3000, function() {
    console.log('listining on port 3000');
})