import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import DashboardScreen from "./screens/DashboardScreen";
import ComplaintForm from "./screens/ComplaintForm";
import "./App.css";

function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/:id/form" component={ComplaintForm} />
      </main>
    </Router>
  );
}

export default App;
