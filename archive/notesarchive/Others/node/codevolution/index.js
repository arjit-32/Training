// const add = require("./add");

// console.log("hello from index.js");

// const sum = add(4,2);
// console.log(sum);


// MODULE SCOPE
// require('./batman');
// require('./superman');


// MODULE CACHING
// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());

// PATH MODULE
// const path = require("node:path");
// console.log("Filename = "+__filename); // Whole path to current file
// console.log("Dirname = "+__dirname); 

// console.log("Basename of Filename = "+path.basename(__filename)); // gives name of current file
// console.log("Basename of Dirname = "+path.basename(__dirname)); 

// console.log("Extname of Filename = "+path.extname(__filename)); // extension of file

// console.log(path.parse(__filename));// significant elements of path

// console.log(path.isAbsolute(__filename)); //is path absolute

// console.log(path.join("parentfolder","folder","index.html")); //joins and normalizes path


// console.log(path.resolve("parentfolder","folder","index.html")); // If we dont add /, then adds to current path
// console.log(path.resolve("/parentfolder","folder","index.html")); // If we add /, then starts url from that folder

// EVENTS
// const EventEmitter = require("node:events");

// const event = new EventEmitter();

// event.on("order-pizza",(size,topping)=>{
//     console.log(`Baking a ${size} pizza with ${topping} topping`);
// });

// event.on("order-pizza",(size)=>{
//     if(size==="large")  console.log("You get a free coke");
// });

// event.emit("order-pizza","large","onion");

// EXTENDING EVENT EMITTER: So that custom class can also emit events
// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine");

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order",(size,toppings)=>{
//     console.log(`Serving a ${size} pizza with ${toppings} toppings`);
//     drinkMachine.serveDrink(size);  
// });


// pizzaShop.order("large","onion");
// pizzaShop.displayOrderNumber();


// FS and FS-PROMISE MODULE
// const fs = require("node:fs");
// const fileContents = fs.readFileSync("./file1.txt","utf-8");
// console.log(fileContents);
// fs.readFile("./file1.txt", "utf-8", (err,data)=>{
//     if(err) console.log(err);
//     else console.log(data);
// })

// fs.writeFileSync("./file2.txt","Hello Sirrrrrrrr");
// fs.writeFile("./file2.txt","Hello Bro", (err)=>{
//     if(err) console.log(err);
//     else console.log("File written");
// })

// PIPES
// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();
// const readableStream = fs.createReadStream("./file1.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2
// });
// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt"));

// HTTP SERVER WITH JSON RESPONSE
// const http = require("node:http");
// const server =  http.createServer((req,res)=>{
//     const person = {
//         name: "Arjit",
//         age: "23"
//     };

//     res.writeHead(200, {"Content-Type":"text/plain"});
//     res.end(person);
// })
// server.listen(3000, ()=>{
//     console.log("Server running on port 3000");
// })

// HTTP SERVER WITH HTML RESPONSE
// const http = require("node:http");
// const fs = require("node:fs");
// const server =  http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type":"text/html"});
//     fs.createReadStream("./index.html").pipe(res);
//     // const html = fs.readFileSync("./index.html");
//     // res.end(html);
// })
// server.listen(3000, ()=>{
//     console.log("Server running on port 3000");
// })


// Async
// const getData = async() => {
//     var y = await "Hello World";
//     console.log(y);
// }
  
// console.log(1);
// getData(); //Hello World
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);


// //sync
// const getDataAnother = {
//     return "nodejs";
// }
  
// console.log(1);
// getData();
// console.log(2);