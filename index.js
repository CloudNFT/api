var http = require('http');
var resGET = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/" method="POST">
        <label>Name: </label>
        <input type="text" name="dname" value="" /><br />
        <label>Email: </label>
        <input type="text" name="demail" value="" /><br />
        <label>Address: </label>
        <input type="text" name="daddress" value="" /><br />
        <button>submit</button>
    </form>
</body>
</html>`


var server = http.createServer(function (req, res) {
    if (req.method === "GET") {
        console.log(req.method)
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(resGET)
    } else if (req.method === "POST") { 
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });
        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }

}).listen(3000);
