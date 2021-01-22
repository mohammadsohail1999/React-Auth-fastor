import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginSceen from "./Screens/LoginSceen";
import Header from "./components/Header";
import OtpSceen from "./Screens/OtpScreen";
import HomeScreen from "./Screens/HomeScreen";



const App = () => {

   

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />

          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" exact component={LoginSceen} />
          <Route path="/Otp" exact component={OtpSceen} />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
