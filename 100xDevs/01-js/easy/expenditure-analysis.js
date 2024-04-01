/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  res=[];
  let mp = new Map();
  for(let i of transactions){
    mp.set(i['category'], mp.get(i['category'])? mp.get(i['category'])+i['price']: i['price']);
  }

  for(let[key,value] of mp){
    transaction = {
      "category": key,
      "totalSpent": value
    }
    res.push(transaction);
  }

  return res;
}

// transactions = [
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 2,
// 		timestamp: 1656072333330,
// 		price: 20,
// 		category: 'Food',
// 		itemName: 'Burger',
// 	},
//   {
// 		id: 3,
// 		timestamp: 1656055523330,
// 		price: 50,
// 		category: 'Play',
// 		itemName: 'Badminton',
// 	}
// ]
// calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
