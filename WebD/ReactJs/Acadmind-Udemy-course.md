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


# React Basics
React.js - A client side JS library

### Why React?
Makes building complex,interactive and reactive UIs simpler.

### Why components?
- Reusable
- Seperation of Concerns

### Commands for setting up 
npx create-react-app Name
npm start - Starts development server
ctrl+c - To close server
npm install - If you want to download dependencies from package.json

### Basic React Application 
    <div id="root"></div>
```javascript
    ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
    );
```
### Adding CSS 
import './file.css'

## Sending data via props 

As components cant use data from other components, we have to set property which can be used by other component

Example -

*_App.js_* 
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
*_Numbers.js_*
We take property as parameter and make use of data in component
```javascript
function Numbers(props) {
  return (
  <div>
    <div>{props.dataProp} * {props.dataProp}</div>
  </div>);
}
export default Numbers;
```

## Reusable Wrapper Components

- Cannot use custom component as wrappers for other components
- If want to do that, use **props.children**
- If we want to give class to wrapper component in another component, then send that data using properties.

*_Card.js_*
```javascript
import "./Card.css";
function Card(props) {
  const classes = "card " + props.className; // className is a property
  return <div className={classes}>{props.children}</div>;
}
export default Card;
```
*_Photo.js_*
```javascript
//Card used as wrapper
import Card from "./Card";
function Photo() {  
  return (
    <Card className="something"> 
      <div>79</div>
    </Card>
  );
}
export default Photo;
```

















