require('dotenv').config();
const http = require('http');
const app = require('./index');

// Port numarasını kontrol 
const port = process.env.PORT || 3000;
console.log(`Server is running on port ${port}`);

const server = http.createServer(app);
server.listen(port);