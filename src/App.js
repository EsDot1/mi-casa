import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRooms} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
