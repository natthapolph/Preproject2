import React, { useState, useEffect } from "react";
import Login from "./component/Login";
import preLogin from "./component/preLogin";
import auth from "./firebase";
import "./App.css";

function App() {
  const [session, setSession] = useState({
    isLogin: false,
    currentUser: null,
    errorMessage: null,
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setSession({
          isLogin: true,
          currentUser: user,
          errorMessage: null,
        });
      }
    });
    return () => {
      handleAuth();
    };
  }, []);

  const headleLogout = () => {
    auth.signOut().then((response) => {
      setSession({
        isLogin: false,
        currentUser: null,
        errorMessage: null,
      });
    });
  };

  return (
    <div className="App">
      {session.isLogin ? (
        <header className="header-App">
          <button type="button" onClick={headleLogout}>
            logout
          </button>
          <p>ABC</p>
        </header>
      ) : (
        <Login setSession={setSession} />
      )}
    </div>
  );
}

export default App;
