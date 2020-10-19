// edited from https://expressjs.com/en/starter/hello-world.html and
// https://gist.github.com/hellotunmbi/a52a264c7cd05e08e8a6a648d89946e5
// on oct 19, 2020

// use this boilerplate for deploying Angular apps on Heroku

const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})