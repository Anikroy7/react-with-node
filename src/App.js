import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  const handleFormSubmit = event => {
    event.preventDefault()
    const name = event.target.name.value;
    const hobby = event.target.hobby.value;
    const user = { name, hobby }
    console.log(user);
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }


  return (
    <div className="App">
      <h1>our own data</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" id="1" />
        <input type="text" name="hobby" id="1" />
        <input type="submit" value="Submit" />
      </form>
      {
        users.map(user => <li key={user.id}>Name: {user.name} hobby: {user.hobby} age:{user.age}</li>)
      }
    </div>
  );
}

export default App;
