import "../styles/Login.css";

const Register = () => {
  return (
    <div className='form-container'>
      <form className='form-box'>
        <h2>Register</h2>
        <input type='text' placeholder='Full Name' required />
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <button type='submit'>Sign Up</button>
        <p className='switch-text'>
          Already have an account? <a href='/sign-in'>Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
