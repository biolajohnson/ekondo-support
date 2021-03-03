import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";
import Header from "../components/Header";
import InfoBlock from "../components/InfoBlock";
import Spinner from "../components/Spinner";
import PersonalData from "../components/PersonalData";
import Footer from "../components/Footer";

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authUser);
  const { loading } = useSelector((state) => state.getUserDetails);

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails());
      //console.log(profile);
    }
  }, [dispatch, userInfo]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="grid-container">
      <Header />
      <InfoBlock />
      <PersonalData />
      <Footer />
    </div>
  );
};

export default DashboardScreen;
