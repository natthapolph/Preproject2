import React, { useState, useEffect } from "react";
import Login from "./component/Login";
import Home from "./component/Home";
import auth from "./firebase";

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

  return (
    <div className="App">
      {session.isLogin ? (
        <header>
          {" "}
          <Home setSession={setSession} />{" "}
        </header>
      ) : (
        <Login setSession={setSession} />
      )}
    </div>
  );
}

export default App;
