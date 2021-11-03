import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Header, Home, ProductItem } from "./Imports/index";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id" exact component={ProductItem} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
