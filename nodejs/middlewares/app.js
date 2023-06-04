const app=require("express")();
const middlewar=require("./logger");
const author=require("./author");


app.use([middlewar,author]);

app.get("/",(req,res)=>{


    res.send("Hello world");
})
app.get("/about",(req,res)=>{
    res.send("about");
})
app.get("/api/products",(req,res)=>{
    console.log(req.user);
    res.send("api product");
})
app.get("/api/items",(req,res)=>{
    res.send("api items");
})


app.listen(3001,()=>{
    console.log("server is listening on 3001");
})