import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault(); //prevent page from reloading
    props.onSaveData(name);
    setName(""); //set name to empty, in turn due to 2-way binding, text-field will get empty
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Full Name : </label>
        <input type="text" value={name} onChange={nameChangeHandler} />{" "}
        {/* 2-way binding-  value={name} */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
