require('dotenv').config();

const http = require('http');

const {
    port
} = require('./config/appConfig');
const dbConnection = require('./config/mongoDbConfig');
const app = require('./app');

const server = http.createServer(app);


server.listen(port, () => {
    console.log(`app listen on port:${port}`);
});