import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Home from "./components/home";
import { Prueba } from "./components/prueba";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/prueba" render={({ history }) => <Prueba />} />
        <Route path="/" render={({ history }) => <Home history={history} />} />
      </Switch>
    </div>
  );
}

export default App;
