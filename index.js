const express = require('express');
const cors = require('cors');
const server = express();
const { PORT } = require("./backend/config");
const { HorasExtrasRoutes } = require("./backend/routes");

const { mongoose } = require('./backend/database');

server.use(express.json());
server.use(cors({origin: 'http://localhost:4200'}));

server .use("/", HorasExtrasRoutes);

server.listen(PORT, () => {
    console.log(`Aplication runing on port ${PORT}`);
});