const http = require("http");
const express = require("express");
const morgan = require('morgan');

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.send("Hello From Node.js");
});
app.get("/contact", (req, res) => {
  res.send("the contact page");
});
app.get("/about", (req, res) => {
  r.es.send("The About Page");
});
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
  });
  
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
