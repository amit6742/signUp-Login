import { useState } from "react";
import axios from 'axios'

const SignUp = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })

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
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
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
      
      <button type="submit" className="btn m-5 btn-primary">
       login
      </button>
    </form>
  );
};

export default SignUp;
