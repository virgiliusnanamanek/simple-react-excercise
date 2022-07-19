import React, {useState} from 'react'

function LoginForm({Login, Error}) { 
    const [details, setDetails] = useState({name: '', email: '', password: '',});

    const handleSubmit = e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <form onSubmit={handleSubmit}>
        {Error !== '' ? (<p>{Error}</p>) : ''}
        <h2>Login</h2>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"
            name="name" placeholder="Enter name" 
            onChange={e => setDetails({...details, name: e.target.value})}
            value={details.name}
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter email" 
            onChange={e => setDetails({...details, email: e.target.value})}
            value={details.email}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" 
            onChange={e => setDetails({...details, password: e.target.value})}
            value={details.password}
            />
        </div>
        <input type="submit" value="LOGIN" />
    </form>
  )
}

export default LoginForm