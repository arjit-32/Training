import { useContext, useState } from "react"
import { CountContext, SetCountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={count}> {/* count will be transported */}
        <SetCountContext.Provider value = {setCount}>
          <Parent />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </div>
  )
}

function Parent() {
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
const count = useContext(CountContext); {/* Directly using the count value without prop drilling */}
const setCount = useContext(SetCountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App