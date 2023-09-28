const connectToMongo = require('./db');
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const app = express()
const port = 4000
const multer = require("multer")
const path = require("path")


async function startServer(){
    await connectToMongo();

    app.use("/",express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`Socialmedia backend listening at http://localhost:${port}`);

});
}

startServer();