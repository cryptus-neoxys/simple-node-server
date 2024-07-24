let http = require("http");
let fs = require("fs");

console.log("starting server");

http
  .createServer((req, res) => {
    fs.readFile("response.html", (err, data) => {
      console.log(req.url);
      if (!err) {
        res.writeHead(200, {
          "Content-Type": "text/json",
          "X-Auth-Token": "d0h8i1o2n3d03njdoaOIOSNJab0ioj",
        });
        res.write(JSON.stringify({ resp: data }));
        return res.end();
      }
      console.error(err);
      res.write("error while reading file");
      return res.end();
    });
  })
  .listen(8080);
