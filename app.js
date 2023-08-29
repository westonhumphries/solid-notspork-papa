const express = require('express')
const app = express()
app.set('view engine' , 'ejs');

let myVariableServer = "soft code  Server data";
app.get('/view', function (req, res) {
  res.render('index', {'myVariableClient' : myVariableServer});
})

app.get('/', function (req, res) {
  res.send('Hello World from express and a PaaS/Render ')
})

app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})



app.listen(3000)