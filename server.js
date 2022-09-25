const http = require('http')
const app = require('./app')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5000

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`);
})
