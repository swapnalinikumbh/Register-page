import "./styles.css";

import React, { useState } from "react";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    // Handle registration logic here
    // You can make an API call to register the user with the provided details
    // or perform any other necessary operations
    console.log("Registration submitted:", {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword
    });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Create username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            maxLength={150}
            pattern="[A-Za-z0-9@/./+/-/_]*"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Continue</button>
      </form>
      <div>
        <p>
          Powered by: <strong>PuneTech Software Pvt. Ltd.</strong>
        </p>
        <p>
          Credits: Icons taken from{" "}
          <a href="https://www.famfamfam.com/lab/icons/silk/">Silk icons</a> and{" "}
          <a href="https://www.iconspedia.com/">iconspedia.com</a>.
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
