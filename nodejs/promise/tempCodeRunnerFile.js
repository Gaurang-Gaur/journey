// const { error } = require("console");
const {path}=require("path");
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
};
const start=async()=>{
try
{

    const first=await gettext("./content/sublime.txt");
    const second=await gettext("./content/subfolder/newsub.txt");
    console.log(first);
    console.log(second);
    console.log("hello");

    
}    
catch{
    // console.log(err);
    

}
    

}
start();
console.log("hello world");