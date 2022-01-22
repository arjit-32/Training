## Chapter-2
React can be imported via CDN

<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

## Chapter-3
Images can be kept in 
- public folder: then we can directly use in our components using _'/image.jpg'_ (Anyhing inside public folder is accessible to everyone)
- src/assets: then we import img in component. _(import img1 from 'assets/image'; then in component <img src={img1} />)_

## Chapter-4(intro to states)
When we change a value that is being used in our template, then react should re-evaluate that component
Hooks - functions that lets us do something special

```javascript
// step1: import
import { useState } from 'react'
// step2: initialize state 
 const [counter,setCounter] = useState(0); // initially set to 0
// step3: change state
 <button onClick= {() => setCounter(counter+1)}>add counter</button>

```

Whenever our state update depends on previous state, always use callback func to access prev state.

```javascript
 <button onClick= {() => setCounter((prevCount) => return prevCount+1)}>add counter</button>
```

Conditional templates - Only display part of component based on some value(true or false).
```javascript
// showEvents is a useState hook. Hide button will be shown if showEvents is true.
 {showEvents && <button onClick={() => setShowEvents(true)}>Hide events</button>}
```

Hooks should be used in top level of component(not within some function inside component)

## Chapter-5(Props)

Send data from parent to child component.
```javascript
// in app.js
<Title titleName="Learning WebDev Events" subtitleName="All the necessary tasks for learning webdev"/>

// in title.js
// Can also destructure -> function Title({title,subtitle}) and now directly use title instead of props.title
export default function Title(props){ 
    return (
        <div>
            <h1 className="title">{props.titleName}</h1>
            <h2 className="subtitle">{props.subtitleName}</h2>
        </div>
    )
}
```

React fragment - Used when we dont need a extra div to wrap our component jsx.
```javascript
function someComponent(){
    return(
        // instead of <>, we can also use React.Fragment
        <> 
            <h1>Heading</h1>
            <p>Paragraph</p>
        </>
    )
}
```

Children props - If we want to pass different jsx template as a props ya fir If we want to use our component as wrapper. Whatever content we have wrapped inside Modal is retrieved using props.children (a special prop) 

```javascript
// in app.js
<Modal>
    <h2>Book a Appointment</h2>
    <p>Use code #Arjit at checkout to get 10% Off</p>
</Modal>

// in modal.js
export default function Modal(props) {
    return (
        <div>
              {props.children}
        </div>
    )
}
```

Functions can be passed as props, to manipulate parent component state
Example - Modal component needs a handleClose function. But handleClose func will be defined in App.js as we have useState hook for showing modal.
```javascript
// in app.js
const [showModal,setShowModal] = useState(true);

const handleClose = () => setShowModal(false);

{showModal &&
        <Modal handleClose={handleClose}>
        <p>something</p>
        </Modal>
}

// in modal.js
export default function Modal(props) {
    return (
        <div className="modal">
              {props.children}
              <button onClick={props.handleClose}>X</button>
        </div>
    )
}
```

Portal - Take a component and move anywhere in the dom. We use _ReactDom.createPortal_ method
```javascript
// This component will be displayed at last of body
import ReactDOM from 'react-dom'
export default function SomeComponent() {
    return ReactDOM.createPortal((
        <div>
            <p> Something </p>
        </div>
    ), document.body)
}
```

Class based components ->
```javascript
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = { date: new Date()}
    }

    render(){
        return(
            <div>
                <p> Hello {this.props.name}!! </p>
                <p> time is {this.state.date.toLocaleTimeString()} </p>
            </div>
        )
    }
}
```

## Chapter-6 (styling)
Global Styles - put in index.css
Component Specific Stylesheet - Make different stylesheet for each components.Only helps in keeping code modular, but still global.
Inline Styles
```jsx
<div className="modal" style={{
                color:"red",
                border:"4px solid",
                borderColor:"red"
                }}>
                <p> Something </p>
</div>
```