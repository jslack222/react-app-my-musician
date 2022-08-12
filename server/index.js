require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const {loginUser, createUser, getPost, createPost} = require("./controller.js")

const { SERVER_PORT } = process.env;

app.use(express.json()); 

app.get('/',(req,res) => {
    res.send("Hello World")
})


app.post("/login", loginUser);
app.post("/popup", createUser);
app.get("/post", getPost);
app.post('/myprofile', createPost);



const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`listening on ${port}`));
