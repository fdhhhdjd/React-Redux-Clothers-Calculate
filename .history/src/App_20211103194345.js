import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Header, Home, ProductItem, Cart } from "./Imports/index";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/product/:id" component={ProductItem} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
