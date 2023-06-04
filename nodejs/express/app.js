const express=require("express");

const path=require('path');

const app =express();

app.use(express.static("./public"));// this middlware which set up all the static render of the page i.e working on the relative link the 
// code making them fit for the server to call them.


// app.get("/",(req,res)=>{
//     // res.writeHead(200,{"content-type":"text/html"});
//     // res.write("Hello i am server response");
//     // // res.end();
//     // res.sendFile(path.resolve(__dirname,"./navbar-app/index.html"));
//     // console.log(path.resolve(__dirname,"./navbar-app/index.html"));// this how we create the absolute path in nodejs.



// })// In this method of send the html pages statical we need to provide the absolute path of the file


app.get("*",(req,res)=>{
    res.status(404).send("<h1>I am error page</h1>");
    res.end();
})


app.listen(3001,()=>{
    console.log("server is listening at 3001");

})