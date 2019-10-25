const express = require('express')
const app = express()

app.use(express.static(__dirname +"/public"));

//Express HBS engine
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home',{
        name: "Jon",
        year : new Date().getFullYear()
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