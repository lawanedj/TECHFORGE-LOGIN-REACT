import React from "react";
import Login from "./components/login/login";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Auth0Provider>
  );
}

export default App;
