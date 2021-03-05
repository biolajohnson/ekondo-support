import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";
import Header from "../components/Header";
import InfoBlock from "../components/InfoBlock";
import Spinner from "../components/Spinner";
import PersonalData from "../components/PersonalData";
import Footer from "../components/Footer";

const DashboardScreen = ({ history }) => {
  const { loading } = useSelector((state) => state.getUserDetails);
  const dispatch = useDispatch();
  const {
    userInfo: { id, name },
  } = useSelector((state) => state.authUser);

  useEffect(() => {
    if (id) {
      dispatch(getUserDetails());
    }
  }, [dispatch, id]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="grid-container">
      <Header />
      <PersonalData name={name} history={history} />
      <InfoBlock history={history} />
      <Footer />
    </div>
  );
};

export default DashboardScreen;
