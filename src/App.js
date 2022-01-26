import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NorietoApi from "./api";
import useToken from "./hooks/useToken";
import "./App.css";
import jwt from "jsonwebtoken";
import UserContext from "./components/auth/UserContext/UserContext";
import Header from "./components/nav/header/Header";
import Footer from "./components/nav/footer/Footer";

import Routes from "./Routes";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useToken();
  const [map, setMap] = useState({});

  useEffect(() => {
    async function getUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          let user = await NorietoApi.userGet(username);
          setUser(user);
          setMap(user.map);
        } catch (err) {
          console.error("Issue loading user");
          setUser(null);
        }
      }
      setLoaded(true);
    }
    setLoaded(false);
    getUser();
  }, [token]);

  async function register(data) {
    try {
      const token = await NorietoApi.authRegisterd(data);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("failed: singup", err);
      return { success: false, err };
    }
  }

  async function login(data) {
    try {
      let token = await NorietoApi.authLogin(data);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("failed login", err);
      return { success: false, err };
    }
  }

  function logout() {
    setUser(null);
    setToken(null);
  }

  function deleteMap() {
    setMap({});
  }

  if (!loaded) return <Loading />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <Routes login={login} register={register} />
          <Footer />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
