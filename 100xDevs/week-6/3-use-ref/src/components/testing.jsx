import { useState, useEffect, useRef} from "react";

export function Testing() {
    const [incomeTax, setIncomeTax] = useState(2000);
    const divRef = useRef();
    
    useEffect(()=>{
        setTimeout(()=>{
            console.log("Function ran")
            // document.getElementById("incomeTaxContainer").innerHTML = 10
            divRef.current.innerHTML = 10
        },3000)
    },[])

    return (
        <div>
            {/* Hi there, your income tax returns are <div id="incomeTaxContainer">{incomeTax}</div> */}

            He there, your income tax returns are <div ref={divRef}>{incomeTax}</div>        
        </div>
    );
};

