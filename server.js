var express=require("express")
var app=express();
app.use(express.static('public'))
app.get("/",(req,res)=>
{
    res.send("Welcome to IET")
})
app.listen(8000);