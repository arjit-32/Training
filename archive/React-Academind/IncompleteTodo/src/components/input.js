import { useState } from "react";

const Input = (props) => {
  const [text, changeText] = useState("");

  const inputChangeHandler = (e) => {
    changeText(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    props.onAddingTask(text);
    changeText("");
  };
  return (
    <form onSubmit={clickHandler}>
      <input type="text" value={text} onChange={inputChangeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};
export default Input;
