import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  return (
    <div className="App">
      <h1>our own data</h1>
      {
        users.map(user => <li key={user.id}>Name: {user.name} hobby: {user.hobby} age:{user.age}</li>)
      }
    </div>
  );
}

export default App;
