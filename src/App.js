import {useState, useEffect} from 'react';
import LoginForm from './components/login-forms';

function App() {
  const userAdmin = {
    email: 'admin@gmail.com',
    password: 'admin321',
  }
  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');
  const [people, setPeople] = useState('')
  const [search, setSearch] = useState('')

  const getDataUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setPeople(data);
  }

  useEffect(() => {
    getDataUser();
  }, [])

  const Login = details =>{
    if(details.email === userAdmin.email && details.password === userAdmin.password){
      setUser(details);
      setError('');
    }else{
      setError('Invalid email or password');
    }
  }

  const Logout = () =>{
    setUser({name: '', email: ''});
  }

  return (
    <div className="App">
     {(user.email !== '') ? (
    <div>
      <h2>Welcome,<span>{user.name}</span></h2>
      <button onClick={Logout}>Logout</button>
      <div>
        <input type="search" name="search" id="search" 
        onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div>
       {people.filter(
          person => person.name.toLowerCase().includes(search.toLowerCase())
       ).map(person => (  <p key={person.id}>{person.name}</p>))}
      </div>
    </div>
     ) : (<LoginForm Login={Login} Error={error} />)}
    </div>
  );
}

export default App;
