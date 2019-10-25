const http = require('http');

http.createServer((req, res) => {
    let data = {
        name: "Jon",
        age: 34,
        url: req.url
    }
    res.write(JSON.stringify(data));
    res.end();
}).listen(2020);

console.log("listening in port 2020");