function author(req,res,next){

    const {user}=req.query;

    if(user==='john'){
        console.log("john is here");
        req.user={name:"john",age:47};
        console.log(req.user);
        
        next();

    }else{
        res.status(401).send("unauthorised");

    }



    next();


}


module.exports=author;