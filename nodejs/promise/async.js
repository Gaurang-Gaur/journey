// const { error } = require("console");
const {path}=require("path");
const {readFile,writeFile}=require("fs").promises;

// const gettext=(path)=>{
//     return new Promise ((reject, resolve)=>{
//         readFile(path,"utf-8",(err,res)=>{
//             if(err){
//                 reject(err);
//                 console.log(err);
        
//             }
//             else{

//                 resolve(res);
//                 console.log(res);
//             }
            
//         });
//     });
// };
console.log(typeof(writeFile));
const start=async()=>{
try
{

    // console.log("run");
    const first=await readFile("./content/sublime.txt","utf-8");
    // console.log("run");
    const second=await readFile("./content/subfolder/newsub.txt",'utf-8');

 await writeFile("./content/subfolder/newsub.txt","This is awesome thing I am gaurang",{flag:"a"});
    // console.log("run1");
    console.log(first,second);
    // console.log(second
    // console.log("hello");

    
}    
catch(error){
    console.log(error);
    

}
    

}
start();
// start();
// console.log("hello world");