const fs = require('fs');

fs.writeFile('4-write-to-file.md','This is a coslfslkjfdslkf lfjlskdflsdfj lk nodejs','utf-8', (err) =>{
    if(err){
        console.error("Error inserting data in file", err);
        return;
    }
    console.log("Data has been written successfully");
})

