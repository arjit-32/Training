import { useState, memo, useCallback } from "react";

export function Testing() {
    const [count, setCount] = useState(0);

    // When "a" function is passed in Demo as props, it gets re-rendered
    // function a(){
    //     console.log("Hi")
    // }

    // When "a" function is using useCallback, then it wont re-render
    const a = useCallback(function(){
        console.log("Hi")
    },[])

    return (
        <>
          <button onClick={()=>setCount(count+1)}>Clickity {count}</button>

          <Demo a={a} />
        </>
    );
};

// memo - Only re-render when "a" is changed
const Demo = memo(function({a}) {
    console.log("Demo is rendered");
    return <div>
        hello {a}
    </div>
})
