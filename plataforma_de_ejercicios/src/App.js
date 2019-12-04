import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
