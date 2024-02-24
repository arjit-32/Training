const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size,toppings){
        this.orderNumber++;
        this.emit("order",size,toppings);
    }

    displayOrderNumber(){
        console.log(`Current order number: ${this.orderNumber}`);
    }

    // registerEventFromWithin(){
    //     this.on("order",(size,toppings)=>{
    //         console.log(`Serving a ${size} pizza with ${toppings} toppings`);
    //     });

    //     this.order("large","onion");
    // }
}

module.exports = PizzaShop;