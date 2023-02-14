const fileSystem=require("fs");

const first=fileSystem.readFileSync("./content/sublime.txt","utf-8");
console.log(first);
// console.log(__dirname);
// const {join,resolve}=require("path");
// const fs=join("./content","subfolder","insidesub.txt");
// console.log(fs);


// const re=resolve(__dirname,"./content","subfolder","insidesub.txt");
// console.log(re);

const sec=fileSystem.readFileSync("./content/subfolder/insidesub.txt","utf-8");
// console.log(sec);

const {writeFileSync,readFilesync}=require("fs");
const fi=writeFileSync("./content/subfolder/newsub.txt",`hello world of node js ${first} and ${sec}`,{flag:"a"});