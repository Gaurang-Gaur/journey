const app=require("express")();

const {products}=require("./data");

app.get("/", (req,res)=>{
    // console.log(res);
    // res.send("hello world This gaurang gaur");
    // res.json(products);
    res.send("<h1>This product page</h1><a href='/api/products'>products</a>")// see here to communicate with the server
    //we i reached the home route send this respond back 

})

// app.get("/api/products",(req,res)=>{
//     // res.json(products);
//     const newproduct= products.map((product)=>{
//         const {id, name,price}=product;

//         return {id,name,price}
//     })

//     res.json(newproduct);
// })

app.get("/api/products/:productID",(req,res)=>{


    const {productID}=req.params;
    console.log(productID);
    console.log("hello world");
    const singleProduct=products.find((product)=>{
        return product.id===Number(productID)})// {} without this there is difference in arrow function*
        if(!singleProduct){
            res.send("<h1>Data is not found</h1>")
        }
    res.json(singleProduct);
})
app.get("/api/v1/query",(req,res)=>{
    // console.log(req.query);
    const {search,limit}=req.query;

    let sortedProduct=[...products];
    if(search){
        sortedProduct=sortedProduct.filter((product)=>{
            return product.name.startsWith(search);
        })
        
    }
    if(limit){
        sortedProduct=sortedProduct.slice(0,Number(limit));

    }
    try{
        if(sortedProduct.length<1){
            return res.status(200).json({success:true, data:[]})
        }
    }catch(error){
        console.log(error);
    }
    res.status(200).json(sortedProduct);
   
})

// learn the about the res about which have the json method 
// this is very hard to understand here 


app.listen(5000, ()=>{
    console.log("server is listening on port 5000");
})