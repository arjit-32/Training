import './App.css';
import {useState} from 'react'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(e){
    e.preventDefault();
    const response = await fetch('http://localhost:1337/api/register',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="name"/> <br/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email"/> <br/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"/> <br/>
        <input type="submit" value="register" />
      </form>
    </div>
  );
}

export default App;
