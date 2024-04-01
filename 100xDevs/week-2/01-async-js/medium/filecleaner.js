const fs = require('fs')

function readFileWrapper(){
    return new Promise((resolve,reject)=>{
        fs.readFile('1-file-cleaner.md','utf-8', (err,data) => {
            if(err){
                console.log(err);
                return;
            }
            resolve(data);
        })
    })
}

async function cleanAndWrite(){
    try{
        let data = await readFileWrapper();
        // Do some operations for the file and then write to file 
        let cleanedData = data 

        fs.writeFile('1-file-cleaner.md',cleanedData, (err)=>{
            if(err){
                console.error(err);
                return;
            }
            console.log("file Cleaned and written");
        })

    }catch(err){
        console.log(err);
    }
}

cleanAndWrite()

