import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Login from "../components/Login";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.authUser);

  if (userInfo !== null) {
    console.log(userInfo);
    return <Redirect to={"/dashboard"} />;
  }
  return (
    <div className="grid-container">
      <Header />
      <MainContent />
      <Login />
      <Footer />
    </div>
  );
};
export default HomeScreen;
