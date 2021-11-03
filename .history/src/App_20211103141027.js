import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./Imports/index";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
