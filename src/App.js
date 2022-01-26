import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NorietoApi from "./api";
import useToken from "./hooks/useToken";
import "./App.css";
import jwt from "jsonwebtoken";
import UserContext from "./UserContext";
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
    async function getUser(){
      if(token){
        try{
          let {username} = jwt.decode(token);
          let user = await NorietoApi.userGet(username);
          setUser(user);
          setMap(user.map);
          
        }
      }
    }
  })
}

export default App;
