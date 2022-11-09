const { log } = require("console");
const express = require("express");
const app = express();
const port = 6060;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/Daniel',(req,res)=>{
    res.send("Hello Daniel")
})


app.listen(port, () => {
  log(`this is the server ${port}`);
});