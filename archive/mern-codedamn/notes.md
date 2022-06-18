[Status: Not Completed, only 2 servers are running and data is being passed from front to backend]

- There are 2 servers - client & backend server
- e.preventDefault() prevents default behaviour
- cors set correct headers to response so chrome lets you communicate cross origin(between 2 different ports)

### useState hook
```jsx
const [name, setName] = useState('');

return(
<form onSubmit={registerUser}> 
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="name"/> <br/>
        ...
)       
```


### send data from form to backend
```javascript
async function registerUser(e){
    e.preventDefault();
    const response = await fetch('http://localhost:1337/api/register',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, // this is set using useState()
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data);
  }
  ```
    