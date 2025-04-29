import "../styles/Login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    const response = axios.post("http://localhost:8000/api/auth/login", {
      email,
      password,
    });

    if (response.status === 200) {
      alert("Login successful!");
      window.location.href = "/home";
    }
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Login Page</h2>
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
        <button type="submit">Sign In</button>
        <p className="switch-text">
          Don't have an account? <a href="/sign-up">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
