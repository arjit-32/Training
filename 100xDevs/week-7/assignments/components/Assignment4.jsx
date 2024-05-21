import { useState } from "react"

const Assignment4 = () => {
    const [para,setPara] = useState("");

    const generateWords = ()=>{
        let numberOfWords = Number(document.querySelector("input").value)
        const arr = ["hello","my","name","anarchy","banana","children","what","is","prema","kuchbhi"];
        let result ="";
        for(let i=0;i<numberOfWords;++i){
            let pos = Math.floor( Math.random()*10);
            result = result + " " + arr[pos];
        }
        setPara(result);
    }

    return (
    <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-3xl font-bold">Para Generator</h1>
        
        <div className="flex flex-row items-center w-full">
            <input className="border rounded shadow m-5 p-3 grow" type="text" placeholder="Enter Number of Words" />
            <button 
            onClick={generateWords}
            className="border rounded grow-0 p-3 h-full bg-gray-950 text-white"> 
                Generate 
            </button>
        </div>

        <div className="w-96 bg-slate-50 p-5">
            {para}
        </div>
    </div>
    )
}

export default Assignment4