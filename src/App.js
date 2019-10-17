import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SingleRoom } from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/not-found" component={Error} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;
