import React, { useState } from "react";
import styles from "../styles/SignUp.module.css";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("registrattionData", JSON.stringify(formData));
    alert("Signed In Succesfully");
  };

  return (
    <div className={styles.signContainer}>
      <form className={styles.formContainerSign} onSubmit={handleSubmit}>
        <h2>Welcome Back!</h2>

        <label htmlFor="username">Enter Your Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter your username..."
          value={formData.username}
          required
          onChange={getValue}
        />

        <label htmlFor="password">Enter Your Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={formData.password}
          required
          onChange={getValue}
        />

        <button type="submit">
          Sign In <FiLogIn />
        </button>

        <div className={styles.newUser}>
          <Link to="/">Create A New Account</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
