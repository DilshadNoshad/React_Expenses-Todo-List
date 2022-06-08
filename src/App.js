import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLogedInfo = localStorage.getItem("logedIn");
    // const pareJson = JSON.parse(userLogedInfo);
    // if (pareJson.userinfo[0].status === "1") {
    if (userLogedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // const userLogedInfo = localStorage.getItem("logedIn");
  // const pareJson = JSON.parse(userLogedInfo);
  // console.log(pareJson.userinfo[0].status === "1");

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem(
      "logedIn",
      "1"
      // `{"userinfo":[{ "Email": "${email}", "Password": "${password}", "status": "1"}]}`
    );
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("logedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
