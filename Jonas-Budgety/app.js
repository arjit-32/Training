/*
Todo:
	Event handle,Get form data,Store data & calculation,Update UI

Modules ->
	UI,Controller,Data
*/
/* A brief look into Controllers interating with each other

let budgetController = (function(){
	// All private stuff outside return
	let x=23;
	let add = function(a){
		return x+a;
	}
	//-----------------
	return { // All public Methods inside return
		publicTest: function(b){
			return add(b);
		}
	}
})(); // coz this is anonymous function it is immediately called


let UIController = (function(){

})();



let controller = (function(budgetCtrl,UICtrl){
	let z = budgetCtrl.publicTest(5);

	return {
		anotherPublic: function(){
			console.log(z);
		}
	}
})(budgetController,UIController);

*/

let budgetController = (function(){
	let Expense = function(id,description,value){
		this.id=id;
		this.description=description;
		this.value=value;
	};

	let Income = function(id,description,value){
		this.id=id;
		this.description=description;
		this.value=value;
	};

	let data = {
		allItems:{
			exp: [],
			inc: []
		},
		totals:{
			exp: 0,
			inc: 0
		}
	}
})(); 


let UIController = (function(){

	let DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};

	return{
		getDOMstrings: function(){
			return DOMstrings;
		},
		getInput: function(){
			return{
			type : document.querySelector(DOMstrings.inputType).value, // inc or exp
			description : document.querySelector(DOMstrings.inputDescription).value,
			value : document.querySelector(DOMstrings.inputValue).value
			};
		}
	}
})();


//Global app controller
let controller = (function(budgetCtrl,UICtrl){

	function setupEventListeners(){
		let DOM = UICtrl.getDOMstrings();
		
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(e){
			if(e.keyCode === 13 || e.which === 13){
			ctrlAddItem();
			}
		});
	}

	
	function ctrlAddItem() {
	// 1. Get input fields	
	let input = UICtrl.getInput();
	
	// 2. Add item to budget controller

	// 3. Add item to UI

	// 4. Calculate budget

	// 5. Display the budget on the UI
	}

	return{
		init: function{
			setupEventListeners();
		}
	};

})(budgetController,UIController);



controller.init();
