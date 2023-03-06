const {readFile}=require("fs");
const { resolve } = require("path");
// Remember this : new is the instance creation object...
// Promise is the constructor which create a instance of object and store it in variable then, we 
// can apply dot operator to access it method and 
// Note : this then is the method of Promise
// how promise look like in js defination.
// function Promise( reject , resolve)
// {
//     this.var1=var1;
//     this.var2=var2;
//     this.then((onFulfilled,onRejected)=>{
         
//         this.onFulfilled
//         this.onRejected
//     });
    
// }

// here gettext function will resolve or reject the promise it mean it will return a promise 
// The then() method of a Promise object takes up to two arguments: callback functions for the fulfilled
//  and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.


// Then, then(onFulfilled)
// then(onFulfilled, onRejected)

// then(
//   (value) => { /* fulfillment handler */ },
//   (reason) => { /* rejection handler */ },
// )
const gettext=(path)=>{
    return new Promise ((reject, resolve)=>{
        readFile(path,"utf-8",(err,res)=>{
            if(err){
                reject(err);
        
            }
            else
            resolve(res);
            
        });
    })
}
// gettext("./content/sublime.txt").then((res)=>console.log(res)).catch((err)=>console.log(err));



