const express = require('express');// Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public/dist'));
//app.use(express.static('taskpane.html'))
//app.use(express.static('dist'))


// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/routes/index.html');
});

// Route to Login Page
app.get('/routes', (req, res) => {
  res.sendFile(__dirname + '/routes/login.html');
});

app.post('/routes', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

const port = 3000 // Port we will listen onn

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));