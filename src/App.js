import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Home2 from "./components/pages/Home2";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/links-to-learn" component={SignUp} />
          <Route path="/bio" component={Home2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
