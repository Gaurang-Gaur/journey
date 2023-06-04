const http=require("http");

// creating the server

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end("homepage");
        console.log("we are at homepage");
    }
    // here our code is sync
    if(req.url==='/about'){
        res.end("about page");
        console.log("we at about page");
        for(let i=0;i<19000;i++){
            for(let j=0;j<10000;j++){
                console.log(`this ${i} and ${j}`);
            }
        }
    }
    if(req.url==='/error'){
        
        res.end("error");
        console.log("error occured");
    }
})


server.listen(5000,()=>{
    console.log("serving listening at 5000");
})	// if you notice here we have two callback function first inside the createServer as parameter
// the second one as listen
// here, listen act only once when the createsever cb complete it all responds then sever
// will listen it