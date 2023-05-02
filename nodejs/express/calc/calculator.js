const express = require("express");
const app = express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;


app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html")
})
app.post("/",(req,res)=>{
    // res.send("Thankyou for posting ")
    let num1=Number(req.body.num1);
    let num2=Number(req.body.num2);

    let result=num1+num2;
    res.send("The result of calculation :"+result);
    // console.log(typeof(req.body));
})
app.listen(port, function () {
    console.log("server hosted at 3000 port");
})