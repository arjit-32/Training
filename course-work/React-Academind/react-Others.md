# React Crash Course(TraversyMedia)

### Why React ? 
Runs on client as SPA(Single Page Application)
Reusable component with their own state.
Virtual DOM - Only the changes are painted & not the whole page. So it is faster.

### Basics
Components can be created by both Function or Classes
Components can have state which determines how components render and behave.
App or global state are available to entire UI
Since version 16.8 React introduced Hooks that lets us use states in Function components.(Prior to that we used class components)
 
## Creating & Using Component
_components/Header.js_
```JSX
const Header = () => {
return (
    <header>
    <h1>Task-ify</h1>
    </header>
);
};
export default Header;
```
_App.js_
```JSX
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};
export default App;
```

## Props
A way to make our components more dynamic.
Sending data while using component.

_App.js_
```JSX
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header title="Task-ify" /> {/*title sent as a property*/}
    </div>
  );
};
export default App;
```

_Header.js_
```JSX
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Yet another generic heading"
};
export default Header;
```

__Note - We can also specify propTypes to restrict the type of data being sent__
```JSX
Header.propTypes = {
    title: PropTypes.string.isRequired
}
```

## Styling
1. Inline
```JSX
 <h1 style={{color: '#fff', backgroundColor: '#aaa'}}>Anything</h1>
```
2. Inline but cleaner
```JSX
<h1 style={headerStyle}>Anything</h1> {/*In Jsx*/}


const headerStyle = {color: '#fff', backgroundColor: '#aaa'}
```
3. External stylesheet
```JSX
import "./styles.css"; {/*In app.js*/}
```

## Events 
Can have _onClick_ JSX attribute
```JSX
const Button = () => {
  const clicked = () => {
    console.log('Hello');
  }
  return (
    <button onClick={clicked}>Add</button>
  );
};
```
To make dynamic button, send event via props & handle it in parent.
_Header.js_
```JSX
import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="Header">
      <h1>{props.title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};
export default Header;
```

_Button.js_
```JSX
const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
```

## State & useState Hook

State is immutable, we cant directly change
Hook is a special function that lets us hook into React features. For ex - If we want our function component to have state we have useState hook.

```JSX
import React, { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0); {/*count set to 0*/}

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
_Done till 50:41 from Travery crash course_
---

# React Academind

**JS Refresher**
Spread - Used to split up array elements OR object properties
const newArray = [...array,3,21]
const newObject = [...obj,newProp:5]
Rest - Used to merge a list of function arguments into an array
function sortArg(...args){
return args.sort()
}
Array Destructuring : [a,b]=['hello','world']
Object Destructuring: {name} = {name:'Max',age:12}

## CHAPTER 1 : React Components & props

React.js - A client side JS library

### Why React?

Makes building complex,interactive and reactive UIs simpler.

### Why components?

- Reusable & Reactive
- Seperation of Concerns

### Commands for setting up

npx create-react-app Name
npm start - Starts development server
ctrl+c - To close server
npm install - If you want to download dependencies from package.json

### Basic React Application
_index.html_
  <div id="root"></div>

_index.js_
```javascript
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
```
_App.js_
```javascript
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <h1>This is React muhahhahaha</h1>
    </div>
  );
}
```

### Adding CSS

import './file.css'

## Sending data via props

As components cant use data from other components, we have to set property which can be used by other component

Example -

_*App.js*_
We have data array & we add property to Number component

```javascript
import Numbers from "./components/Numbers";
function App(){
    const data = [1,2,3];
    return (
        <h1>Number*Number</h1>
        <Numbers dataProp={data[0]} />
        <Numbers dataProp={data[1]} />
        <Numbers dataProp={data[2]} />
    )
}
export default App;
```

_*Numbers.js*_
We take property as parameter and make use of data in component

```javascript
function Numbers(props) {
  return (
    <div>
      <div>
        {props.dataProp} * {props.dataProp}
      </div>
    </div>
  );
}
export default Numbers;
```

## Reusable Wrapper Components

- Cannot use custom component as wrappers for other components
- If want to do that, use **props.children**. It is a default property which means everything between Custom components.
- If we want to give class to wrapper component in another component, then send that class using properties.

_Footer.js_
```jsx
function Footer() {
  return (
    <div>
      <p> All rights are reserved by BoX organization </p>
      <p> Code by @ArjitSharma </p>
    </div>
  );
}
export default Footer;
```

_Box.js_
```jsx
function Box(props) {
  return <div>{props.children}</div>; {/*bring everything between <Box> & </Box> and put here*/}
}
export default Box;
```

_App.js_
```jsx
import "./styles.css";
import Box from "./components/Box";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="App">
      <Box> {/* Box can be used as Wrapper */}
        <p>I can write anything in here</p>
        <Footer />
      </Box>
    </div>
  );
}
```
---

## CHAPTER 2 : States & Events

## Events
Instead of document.getElementById and so on, in React we can use onClick,onBlur etc. inside JSX.

_*Example.js*_

```javascript
const Example = () => {
  const clickHandler = () => {
    alert("clicked");
  };
  return (
    <div>
      <h2>Hello</h2>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Example;
```

## States

- Lets us call our component function again when our state changes.
- Hooks(like useState) should be called in component functions only, not inside nested function.
- Only the instance of component will be re-evaluated where useState is used.

```javascript
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [heading, changeHeading] = useState("Heading");

  const clickHandler = () => {
    changeHeading("Oooooo.. Changed Heading!!");
  };

  return (
    <div className="App">
      <h1>{heading}</h1>
      <button onClick={clickHandler}>Change</button>
    </div>
  );
}
```

Change present state based on previous -> use anonymous func with parameter prevState 

```javascript
import React, { useState } from "react";
const Test = () => {
  const [count, changeCount] = useState(0);
  const addCount = () => {
    changeCount((previousState) => {
      return previousState + 1;
    });
  };
  return (
    <div>
      <form>
        <label>Full Name : </label>
        <input type="button" value="Enter" onClick={addCount} />
        {console.log(count)}
      </form>
    </div>
  );
};
export default Test;
```

## Basic form
2-way binding is method in which we not only take data from input field, but can also feed it back on submitting form.

```javascript
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault(); //prevent page from reloading
    console.log(name);
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
```

## Sending data from Child to parent 
Also called lifting the state up.
Accept a function via props and call it from Child component to then trigger some action in parent component.

2 steps - 
1. Send a parameterized function as parameter as props.

```javascript
import "./styles.css";
import React, { useState } from "react";
import Form from "./components/Form";
export default function App() {
  const saveNameHandler = (n) => {
    const name = n;
    console.log(name);
  };
  return (
    <div className="App">
      <h1>Name printer</h1>
      <Form onSaveData={saveNameHandler} />
    </div>
  );
}
```

2. Calling this function and keeping data we want to send in parent as arguments

```javascript
import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault(); 
    props.onSaveData(name); //name passed to parent
    setName(""); 
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Full Name : </label>
        <input type="text" value={name} onChange={nameChangeHandler} />{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
```

## CHAPTER 3 : Lists & Conditions

When working with lists, unique key(a special attribute) is used for React to distinguish individual list items.

## Passing array to Child component & printing

_App.js_
```javascript
export default function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      <h1>List printer</h1>
      <ListItem numbers={numbers} />
    </div>
  );
}
```
_ListItem.js_
```javascript
const ListItem = (props) => {
  return props.numbers.map((num) => <div key={num}>{num}</div>);
};
export default ListItem;
```

## Get data from Child and add to list in Parent component

_App.js_
```javascript
export default function App() {
  const [tasks, changeTask] = useState(["do react", "bring eggs", "walk"]);

  const addTask = (t) => {
    changeTask(prevState => {
      return [...prevState, t];
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input onAddingTask={addTask} />
    </div>
  );
}
```

_input.js_
```javascript
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
```


## Conditional Content
- Using Ternary operator((condn)?true:false)

```javascript
const ListItem = (props) => {
  return (
    <ul>
      {props.tasks.length === 0 ? (
        <p>No Items, Done for the day </p>
      ) : (
        props.tasks.map((t) => <li>{t}</li>)
      )}
    </ul>
  );
};
export default ListItem;
```

- Using && op
If 1st condn is true, it returns 2nd operand/statement

```javascript
{1===1 && <p>1 is indeed, equal to 1</p>}
```

---

# React Documentation

## Hello World
```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

## Introducing JSX

JSX - syntax extension to javascript, it produces React elements.

Instead of seperating technologies by putting markup & logic in seperate files, React seperates concerns with loosely coupled components.

We embed javascript in JSX using curly brace -> {}

## Elements

Smallest building block.(components are made of elements).
React elements are objects & React DOM takes care of updating the DOM.

React elements are immutable.

React only update whats necessary.

## Components & Props

Components are like functions, they take in props and return React elements describing what should appear on screen.

- Function Components

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- Class Components

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## State & Lifecycle






























