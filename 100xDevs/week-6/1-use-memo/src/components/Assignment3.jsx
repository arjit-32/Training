import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 100 },
        { name: 'Chips', value: 100 },
        { name: 'Onion', value: 100 },
        { name: 'Tomato', value: 100 },
        // Add more items as needed
    ]);

    // Your code starts here
    const totalValue = useMemo( ()=> {
        let tot=0;
        items.forEach(item => {
            tot+=item.value;
        });
        return tot;
    }, [items]);
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
