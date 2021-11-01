import React from "react";
import "./styles/css/App.css";
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Start from "./components/Start/Start";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";
import UserProfile from "./components/UserProfile/UserProfile";
import Appointment from "./components/Appointment/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/signin" component={Signin} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/profile/:user" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
