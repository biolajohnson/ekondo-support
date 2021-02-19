import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import LoginScreen from "./screens/LoginScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import FormScreen from "./screens/FormScreen";
import InfoScreen from "./screens/InfoScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/signin" component={LoginScreen} />
        <Route path="/info" component={InfoScreen} />
        <Route path="/support/:id" component={FormScreen} />
      </main>
    </Router>
  );
}

export default App;
