const fs = require('fs');
fs.readFile('3-read-from-file.md','utf-8', (err,data)=>{
    if(err){
        console.error("Error reading file: ", err);
        return;
    }
    console.log(data);
});

// an expensive operation to show how readfile is async and goes to callback queue
a=0;
for(let i=0;i<100000000;++i){
    a+=i;
}
console.log("this is a console log ");