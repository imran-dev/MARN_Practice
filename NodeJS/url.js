var http = require('http');
var URL = require('url');

var server = http.createServer(function (req, res){
    var myURL = "http://rabbil.com/blog.html?year=2020&month=july";
    var myURLObj = URL.parse(myURL, true);

    var myHostName = myURLObj.host;
    var myPathName = myURLObj.pathname;
    var mySearchName = myURLObj.search;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(myHostName);
    res.end();

    console.log(myURLObj);

    // if(req.url == '/'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<h1>This is home page</h1>');
    //     res.end();
    // } else if (req.url == '/about'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<h1>This is about page</h1>');
    //     res.end();
    // } else if(req.url == '/contact'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<h1>This is contact page</h1>');
    //     res.end();
    // } else {
    //     res.writeHead(402, {'Content-Type': 'text/html'});
    //     console.log('Something wrong!');
    // }
    // res.end('Hello World');
});

server.listen(5050);
console.log('Server run success.');