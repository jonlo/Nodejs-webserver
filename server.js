const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')

app.use(express.static(__dirname + "/public"));

//Express HBS engine
hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        name: "Jon lopez de guereña",
        title_text: "Jon web"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: "Jon lopez de guereña",
        title_text: "About"
    });
})

app.get('/data', (req, res) => {
    let data = {
        name: "Jon",
        age: 34,
        url: req.url
    }
    res.send(data);
})


app.listen(3000, () => {
    console.log("listening in port 2020");
})