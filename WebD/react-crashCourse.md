# Intro

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

_Done till 50:41_