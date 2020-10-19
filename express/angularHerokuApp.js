// 1. In the terminal: add express to the project: npm i express --save
// 2. In project root: create server.js and paste in this code
// 3. In package.json: change the 'start' script to "start": "node server.js",
// to test, run: ng build && npm start, then go to localhost:port

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