const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((request, response) => {
      let parsedAddress = url.parse(request.url, true);
      let file = "." + parsedAddress.pathname;
    console.log(parsedAddress.pathname);  
    fs.readFile(file, (err, data) => {
        if (err){  // throw err
        response.writeHead(404, { "Content-Type": "text/html" });
        fs.readFile("e404.html", (err1, erData) => {    
            if (err1) throw err1;
            return response.end(erData);
        })
        return
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        return response.end();
      });
    }).listen(8000);
