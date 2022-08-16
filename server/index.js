require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const {loginUser, createUser, getPost, createPost, deletePost, getNews, getSongs} = require("./controller.js")

const { PORT } = process.env;



app.use(express.json()); 
app.use(express.static(path.resolve(__dirname, "../build")));
app.get('/',(req,res) => {
    res.send("Hello World")
})


app.post("/login", loginUser);
app.post("/popup", createUser);
app.get("/post", getPost);
app.post('/myprofile', createPost);
app.delete('/deletepost/:id', deletePost)
app.get('/getnews', getNews)
// app.get('/getsongs', getSongs)

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});


const SERVER_PORT = process.env.PORT || 5002;

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`));
