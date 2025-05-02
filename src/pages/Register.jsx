import "../styles/Login.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.get("http://127.0.0.1:8000");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        {
          name,
          email,
          password,
          password_confirmation: confirmPassword, // Laravel uses this exact name
        },
        {
          withCredentials: true, // important for cookies if using Sanctum
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Registration successful!");
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please check the console.");
    }
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Register gjhghgjg</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p className="switch-text">
          Already have an account? <a href="/sign-in">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
