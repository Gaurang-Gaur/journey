const express=require("express");
const app =express();// top tier function from the app 
const port=3000;
app.get("/",function (request, respond){
    // console.log(request);
    respond.send("<h1>Hello world</h1>");
    // console.log(respond);
})
app.get("/contact",function (request, respond){
    // console.log(request);
    respond.send("<h1>This is abhijeet shkula pages</h1>");
    // console.log(respond);
})
app.get("/about",function (request, respond){
    // console.log(request);
    respond.send("<h1>This website is created by gaurang great</h1>");
    // console.log(respond);
})
app.listen(port,cont);

// console.log("first this will run than helle world");

function cont(){
    console.log("helle world");
}


