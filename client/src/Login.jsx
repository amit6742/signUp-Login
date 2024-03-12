import { useState } from "react";
import axios from 'axios';
 import {Link,  useNavigate} from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
 const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (email && password) {
      try {
        const response = await axios.post('http://localhost:8080/login/v1', { email, password });
        if (response.data === "success") {
          alert("You have logged in successfully");
          navigate('/home')
        } else {
          alert("Invalid password");
        }
      } catch (error) {
        console.log(error);
        alert("An error occurred while logging in");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

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
      <Link to="/register" type="submit" className="btn m-2 btn-primary">
      Create an Account
      </Link>
    </form>
  );
};

export default Login;