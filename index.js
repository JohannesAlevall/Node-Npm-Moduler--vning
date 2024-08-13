import http from "http";
import fs from "fs";

const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      console.log("Something went wrong.");
      res.writeHead(404);
    } else {
      res.write(data);
      console.log("IM here!");
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening to port " + port);
  }
});
