const http = require("http");
const fs = require("fs");

const readServerFile = (filePath, res) => {
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
        sendError(res);
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    sendError(res);
  }
};

const sendError = (res) => {
  res.writeHead(404, {
    "Content-Type": "text/html",
  });
  res.write("<h1>404 FILE NOT FOUND</h1>");
  res.end();
};

const app = http.createServer((req, res) => {
  if (req.url.indexOf(".html") !== -1) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    readServerFile(`./views${req.url}`, res);
  } else if (req.url.indexOf(".js") !== -1) {
    res.writeHead(200, {
      "Content-Type": "text/javascript",
    });
    readServerFile(`./public/js${req.url}`, res);
  } else if (req.url.indexOf(".css") !== -1) {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    readServerFile(`./public/css${req.url}`, res);
  } else if (req.url.indexOf(".png") !== -1) {
    res.writeHead(200, {
      "Content-Type": "image/png",
    });
    readServerFile(`./public/img${req.url}`, res);
  } else {
    sendError(res);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});