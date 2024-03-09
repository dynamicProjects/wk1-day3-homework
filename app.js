const express= require('express');
const path = require('path');
const route = require('./routes/index');

const app = express();


app.use(express.static('css', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('./css/style.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));
app.use(express.static('js', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('./js/vue.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));
app.use(express.static('./images'));
app.get('/favicon.ico', (req, res) => res.status(204));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')
app.use('/', route);

module.exports =app;    