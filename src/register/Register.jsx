import React, { useState } from "react";
import { registerUser } from "../services/authService";

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setUser((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(user);
      console.log(response); // Обработка успешной регистрации
    } catch (error) {
      console.error(error); // Обработка ошибки регистрации
    }
  };

  return (
    <div>
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleSubmit}
      className="container "
      style={{ width: "500px" }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder="First Name"
            value={user.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Last Name"
            value={user.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={user.password_confirmation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="terms"
            checked={user.terms}
            onChange={handleChange}
          />
          <label className="form-check-label">
            I accept the terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;