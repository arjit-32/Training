import { useState, useMemo } from "react";

export function AssignmentSum() {
    const [input, setInput] = useState(0);
    const [count, setCount] = useState(1);
    
    // console.log("ran");
    // let SumTillNumber = 0; 
    // for(let i=1;i<=input;++i){
    //    SumTillNumber+=i;
    // }


    let SumTillNumber = useMemo(()=>{
        console.log("ran")
        let SumTillNumber = 0; 
        for(let i=1;i<=input;++i){
            SumTillNumber+=i;
        }
        return SumTillNumber
    }, [input])
    

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => {
                    setInput(e.target.value)
                }} 
                placeholder="Find sum from 1 to n"
            />
            <p>Sum is {SumTillNumber}</p>
            <button onClick={()=>setCount(count+1)}>Counter {count}</button>
        </div>
    );
}