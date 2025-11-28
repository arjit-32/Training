import { useState } from "react"

function App() {
  const [count, setCount] = useState(0); // Initializing the state

  return (
    <div>
      {/* Passing the state and the function to update the state as props to the Button Component */}
      <CustomButton count={count} setCount={setCount} />  
    </div>
  )
}


function CustomButton(props){
  function onClickHandler() {
    props.setCount(props.count+1); // Setting the state, React re-renders the component automatically
  }
  return (
  <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
  )
}

export default App
