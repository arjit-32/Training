import { useRef, useEffect } from "react";

// Create a component with a text input field and a button. 
// When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputBoxRef = useRef();

    useEffect(() => {
        // document.getElementById("inputBox").focus();
        inputBoxRef.current.focus();
    }, []);

    const handleButtonClick = () => {
        // document.getElementById("inputBox").focus();
        inputBoxRef.current.focus();
    };

    return (
        <div>
            {/* <input id="inputBox" type="text" placeholder="Enter text here" /> */}
            <input ref={inputBoxRef} type="text" placeholder="Enter Text" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
