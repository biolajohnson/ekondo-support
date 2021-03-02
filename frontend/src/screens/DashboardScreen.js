import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

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
    <>
      <Header />
      <h1>{`Hello ${userInfo.name}`}</h1>
    </>
  );
};

export default DashboardScreen;
