import "../styles/Login.css";

const Login = () => {
  return (
    <div className='form-container'>
      <form className='form-box'>
        <h2>Login Page</h2>
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <button type='submit'>Sign In</button>
        <p className='switch-text'>
          Don't have an account? <a href='/sign-up'>Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
