const {readFile} =require("fs");


const getText=(path)=>{

    return new Promise((resolve, reject)=>{
        
readFile(path,"utf8",(err,data)=>{
    if(err){
        // return ;
        reject(err)
    }
    else{
        // console.log(data);
        resolve(data);
    }
})
    })
}


getText("./content/sublime.txt").then(result=>{console.log(result);}).catch(err=>{console.log(err)});