const {writeFile,readFile}=require("fs");
readFile(("./content/subfolder/insidesub.txt"),("utf-8"),(err,result)=>{
    console.log('Starting');
    
    if(err){
        console.log(err);
        result;

        
    }
    else{
        const first=result;
        readFile(("./content/sublime.txt"),("utf-8"),(err,result)=>{
            if(err){
                console.log(err);
                return;
                
            }
            else{
                const sec=result;
                writeFile(("./content/subfolder/result-async.txt"),`here my result ${first} and ${sec}`,(err,result)=>
                {
                    if(err){
                        console.log(err);
                        
                        return;
                    }
                    console.log('result');
                    
                    console.log(result);
                    
                });
                
            }
            
        });
    }
    console.log('ending...');
    
    
});

