import React, { useState } from "react";
import auth from "../firebase";
import "../component/css/login.css";

const Login = ({ setSession }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );
      const { user } = response;
      setSession({
        isLogin: true,
        currentUser: user,
      });
    } catch (error) {
      setSession({
        isLogin: false,
        currentUser: null,
        errorMessage: error.errorMessage,
      });
    }
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <body>
      <header className="header-login">
        <nav>
          <div className="logo">
            <h1>Ku</h1>
          </div>
        </nav>
        <form id="login">
          <h1>Login</h1>
          <div>
            <input type="email" placeholder="Email" onChange={handleUsername} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </div>
          <div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </header>
    </body>
  );
};

export default Login;
