import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newUsersDetails } from "../../API/function";

function Login() {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/main");
    newUsersDetails(newUser);
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  console.log("newUser", newUser);

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="name"
            required
            value={newUser.name}
            onChange={(e) => handleUserData(e)}
          />
        </div>
        <br />
        <div className="input-container">
          <label>UserID </label>
          <input
            type="text"
            name="email"
            required
            value={newUser.email}
            onChange={(e) => handleUserData(e)}
          />
        </div>
        <br />
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            required
            value={newUser.password}
            onChange={(e) => handleUserData(e)}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
