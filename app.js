
const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.send("index")
})


app.listen(3000, (req, res)=>{
    console.log("Corriendo el el puerto 3000")
});