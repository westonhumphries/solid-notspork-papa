const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = (process.env.PORT || 3000)

app.set('view engine', 'ejs');



let myVariableServer = 'soft coded server data';
app.use(bodyparser.urlencoded)

app.post('/postClientData', function (req, res) {
console.log("body: ", req.body)
console.log("params" , req.params['userName']);

myVariableServer = 'now we\'ve posted';

  res.render('index', 
  {
    'myVariableClient' : myVariableServer 
  }
  );
})


app.get('/humphries', function (req, res) {
  res.render('index', 
  {
    'myVariableClient' : myVariableServer 
  }
  );
})

app.get('/', function (req, res) {
  res.send('<h1>Hello World From Express & a PaaS/Render</h1>')
})

app.get('/whatever', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})



// app.listen(3000)

app.listen(port, () => console.log(`Server is running...on ${ port }` ));