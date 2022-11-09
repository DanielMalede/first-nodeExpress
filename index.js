const { log } = require("console");
const express = require("express");
const app = express();
const port = 6060;

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.post('/',(req,res)=>{
    const data = req.body
    res.send(data)
})
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/Daniel',(req,res)=>{
    res.send("Hello Daniel")
})

app.get('/:id',(req,res)=>{
    res.send(`the id is:${req.params.id}`)
})

app.listen(port, () => {
  log(`this is the server ${port}`);
});