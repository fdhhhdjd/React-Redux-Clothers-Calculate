import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./Imports/index";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
