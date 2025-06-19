import React, { useState } from "react";
import styles from "../styles/Registration.module.css";
import { RiAccountCircleFill } from "react-icons/ri";

const Registration = () => {
  const initialData = {
    username: "",
    password: "",
    number: "",
    address: "",
  };

  const [formData, setFormData] = useState(initialData);

  const getValue = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault;
    localStorage.setItem("registrattionData", JSON.stringify(formData));
    alert("Account Created!");
  };

  return (
    <div className={styles.regContainer}>
      <form className={styles.RegistrationForm} onSubmit={onSubmit}>
        <h2>Create Account</h2>

        <label htmlFor="username">Enter Your Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter your username..."
          required
          onChange={getValue}
        />

        <label htmlFor="password">Enter Your Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password..."
          required
          onChange={getValue}
        />

        <label htmlFor="phone">Enter Your Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          placeholder="Enter your phone number..."
          onChange={getValue}
        />

        <label htmlFor="address">Enter Your Address</label>
        <input
          id="address"
          type="text"
          name="address"
          required
          placeholder="Enter your address..."
          onChange={getValue}
        />

        <button type="submit">
          Create Account <RiAccountCircleFill />
        </button>

        <div className={styles.oldUser}>
          <a href="/sign-up">Already Registered? Sign In</a>
        </div>
      </form>
    </div>
  );
};

export default Registration;
