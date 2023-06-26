import React, { useState } from "react";
import { loginUser } from "../services/authService";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(credentials);
      console.log(response); // Обработка успешного входа
    } catch (error) {
      console.error(error); // Обработка ошибки входа
    }
  };

  return (
    <div>
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit}
      className="container "
      style={{ width: "500px" }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
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
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;