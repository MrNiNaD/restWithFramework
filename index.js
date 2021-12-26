const http = require("http");
const post = require("./server.json");

const server = http.createServer((req, res) => {
  console.log("req.url", req.url, req.method);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(post));
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
