// edited from https://expressjs.com/en/starter/hello-world.html and
// https://gist.github.com/hellotunmbi/a52a264c7cd05e08e8a6a648d89946e5

// STEPS
// 1. add express to the project: npm i express --save
// 2. create app.js in project root and paste in this code
// 3. change the 'start' script in package.json: "start": "node app.js",
// to test, run: ng build && npm start, then going to localhost:$PORT

const express = require('express');
const app = express();
const port = (process.env.PORT || 8080);

// find the app name in package.json
app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})