require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
// const {} = "./controller.js"

const { SERVER_PORT } = process.env;

app.use(express.json()); 

app.get('/',(req,res) => {
    res.send("Hello World")
})






const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`listening on ${port}`));
