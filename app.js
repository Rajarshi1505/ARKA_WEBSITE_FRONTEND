//imports
const express = require('express');
const app = express();
const port = 8000;
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/images',express.static(__dirname + 'public/images'));


//set ViewEngine

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/events', (req, res) => {
    res.render('events');
});

app.get('/arkafacts', (req, res) => {
    res.render('arkafacts');
});

app.get('/arkareels', (req, res) => {
    res.render('arkareels');
});

app.get('/arkanews', (req, res) => {
    res.render('arkanews');
});

app.get('/workshops', (req, res) => {
    res.render('workshops');
});

app.get('/members', (req, res) => {
    res.render('members');
});



 

app.listen(port,() => console.log(`Listening to port ${port}`));




