const fs = require('fs');
const https = require('https');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

https.createServer({
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt')
}, app).listen(8000);

console.log("Server Started at: https://localhost:8000");
