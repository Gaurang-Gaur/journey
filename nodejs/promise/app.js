
// const {path}=require("path");
const {readFile}=require("fs");

const gettext=(path)=>{
    return new Promise ((reject, resolve)=>{
        readFile(path,"utf-8",(err,res)=>{
            if(err){
                reject(err);
        
            }
            else
            resolve(res);
            
        });
    });
};í
// console.log('hellow');

const start=async()=>{
try
{

    const first=await gettext("./content/sublime.txt");
    console.log(first);
    console.log("hello");

    
}    
catch{
    // console.log(error);
    

}
    

}
start();