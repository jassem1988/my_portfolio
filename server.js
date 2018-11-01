// Node libraries
const express = require('express'),
      hbs     = require('hbs');

var app = express();

// Set express to use hbs in the views dir
app.set('view engine', 'hbs');

//let express use /public folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
    name: 'Jassem',
    works: [
      'my site',
      'my porfolio'
    ]
  });
});

app.listen(4000, () => {
  console.log('Server is up on port 4000');
});
