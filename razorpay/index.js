const express = require("express")
const app = express();
const https = require("https");
const razorpay=require("razorpay");
const port = 3000;
const cors=require("cors");

app.use(express.json());
app.use(cors());



// The express.json() function is a built-in middleware function in Express. 
// It parses incoming requests with JSON payloads and is based on body-parser. 
// it return object



app.get("/", function (req, res) {
    res.send("server is response");


})


//let create the route for the payement


app.post("/payment", async (req, res) => {
    let {amount}=req.body;
    var instance = new razorpay({ key_id: 'rzp_test_PUXXCSiu9ITJY4', key_secret: 'PVV2mR34zrI8GGEQRyaNZ0nN' })

    let order=await instance.orders.create({
        amount: amount*100,// here amount need to be paise so we convert it by mulitply it with 100
        currency: "INR",
        receipt: "receipt#1",
      
    });
    res.status(201).json({
        success:true,
        order,
        amount,
    });

});





app.listen(port, function () {
    console.log("server is created and running on port 3000");
})