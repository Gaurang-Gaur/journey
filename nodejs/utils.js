const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise("./content/sublime.txt", "utf-8");
        const second = await readFilePromise("./content/subfolder/newsub.txt", "utf-8");
        await writeFilePromise("./content/subfolder/newpromisify.txt", `This is concentation ${first} and ${second}`);

        console.log(first,second);
    }
    catch{
        console.log(err);
        
    }
    

}