import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Fake login, just redirect
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Intern Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Enter your name" required />
        <input type="password" placeholder="Enter password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
