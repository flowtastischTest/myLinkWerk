const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = 8001;

app.use(express.static(path.join(__dirname, 'dist/my-link-werk/browser')));

// Handle Angular client-side routing by serving the index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/my-link-werk/browser', 'index.html'));
});

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://link.scriptwerk.com:${port}`));
