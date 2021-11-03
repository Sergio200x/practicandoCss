const express = require("express");
const path = require("path");

const app = express();

const publicFolderPath =path.join(__dirname,"/public");
app.use(express.static(publicFolderPath));
app.get("/", (req,resp)=>{resp.sendFile(path.join(__dirname,"views/index.html")) });

app.listen(3030, ()=>{console.log("servidor activo")});