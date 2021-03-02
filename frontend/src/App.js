import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import LoginScreen from "./screens/LoginScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import FormScreen from "./screens/FormScreen";
import InfoScreen from "./screens/InfoScreen";
import DashboardScreen from "./screens/DashboardScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/signup" component={LoginScreen} />
        <Route path="/info" component={InfoScreen} />
        <Route path="/support/:id" component={FormScreen} />
      </main>
    </Router>
  );
}

export default App;
