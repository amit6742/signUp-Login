import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [user, setUser] = useState({
 
    email:"",
    password:""
  })

  const handleChange = (e)=>{
    const {name, value} = e.target
    setUser({...user,[name]: value })
  }

  const handleClick =  async(e)=>{

 const {email, password} = user
    e.preventDefault()
    if(email && password){
    await axios.post('http://localhost:8080/login', {email,password})
     .then(res => console.log(res))

     .catch(err => console.log(err))

    }
    else{
      alert("no record founds")
    }
    
   

   

  }

  return (
    <form>
      
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
        <label htmlFor="password" className="form-label">
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
     login
      </button>
      
      <button type="submit" className="btn m-5 btn-primary">
       create an account
      </button>
    </form>
  );
};

export default Login;
