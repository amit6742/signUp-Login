import { useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })
  const navigate =  useNavigate()

  const handleChange = (e)=>{
    const {name, value} = e.target
    setUser({...user,[name]: value })
  }

  const handleClick = (e)=>{
    const {name, email, password} = user
    e.preventDefault()
    if(name && email && password){
 axios.post('http://localhost:8080/register', user)
 .then(res => console.log(res))
 alert("register Successfully")

 navigate('/login')
   
     
    }
    else{
      alert("no recored found")
    }
   



  }
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
         name
        </label>
        <input
          type="name"
          className="form-control"
  
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleClick} type="submit" className="btn btn-primary">
        registered
      </button>

          <p>have already an account</p> 
      
      
      <Link to="/login" type="submit" className="btn m-2 btn-primary">
      login
      </Link>
      
      
    </form>
    
  );
};

export default SignUp;
