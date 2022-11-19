const express = require('express');
const app = express();

const db = require('./db');
const sharkRouter = require('./routes/shark');
const indexRouter = require('./routes/index');


const port = 8080;
const path = __dirname + '/view/';



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/sharks',sharkRouter);


app.listen(port, () => console.log('Listening on port ' + port));