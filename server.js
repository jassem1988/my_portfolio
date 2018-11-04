// Node libraries
const express = require('express'),
      hbs     = require('hbs');

const port = process.env.PORT || 4000;  //to connect to heroku OR locol host

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); //Let hbs use partials
app.set('view engine', 'hbs'); // Set express to use hbs in the views dir

//let express use /public folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    creator: "Jassem Al-Buloushi",
    currentYear: new Date().getFullYear()
  });
});

app.listen(port, () => {
  console.log(`'Server is up on port ${port}'`);
});
