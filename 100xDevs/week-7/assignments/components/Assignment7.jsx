import { useRef, useState } from "react";

const Assignment7 = () => {
    const [wished,setWished] = useState(false);
    const inputRef = useRef();
    const birthdayWishes = [
        "Hello, hope you have a wonderfull birthday",
        "This is amazing, its your day",
        "Wishing you and amazing day with lots of love",
        "What can I say, you the man, its your birthday"
    ]

    const clickHandler = () => {
        // console.log(inputRef.current.value);
        setWished(true);
    }

    return (
        (!wished)?
        <div className="flex w-1/2 flex-col justify-center items-center min-h-96 rounded-lg bg-red-100 border">
                <h1 className="font-bold text-2xl mb-12"> Birthday Wisher </h1>
                <div>
                    <input ref={inputRef} type="text" className="p-2 rounded border" placeholder="Enter a name"/>
                    <button 
                    onClick={clickHandler}
                    className="rounded p-2 bg-red-800 text-white">Done</button>
                </div>
        </div>
        :
        <div className="flex justify-center items-center bg-green-800">
            <div>
                Yoooooooooo
             <p className="text-xl text-white"> {birthdayWishes[Math.floor(Math.random()*10%4)]} </p>
            </div>
            
        </div>
    )
}

export default Assignment7;