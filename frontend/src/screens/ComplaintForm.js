import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateComplaint,
  deleteComplaint,
} from "../actions/complaintsActions.js";
import axios from "axios";
import Spinner from "../components/Spinner.js";
import logo from "../img/white-logo.png";

const ComplaintForm = () => {
  const [text, setText] = useState("");
  const [plantName, setPlantName] = useState("");
  const [drySoil, setDrySoil] = useState(false);
  const [yellowLeaves, setYellowLeaves] = useState(false);
  const [holesInLeaves, setHolesInLeaves] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const { complaint } = useSelector((state) => state.getComplaint);
  const {
    userInfo: { name, email },
  } = useSelector((state) => state.authUser);

  const cancelComplaintHandler = () => {
    dispatch(deleteComplaint(complaint._id));
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    setImage(file);
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    try {
      await axios.post("/api/upload", formData, config);
      setUploading(false);
    } catch {
      console.error(e);
      setUploading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateComplaint({
        name,
        email,
        text,
        plantName,
        drySoil,
        yellowLeaves,
        holesInLeaves,
        image,
      })
    );
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="main-form">
        <h1 className="page-title">Complaint form</h1>

        <div>
          <label>Name</label>
          <input className="input" readOnly value={name} />
        </div>
        <div>
          <label>Email</label>
          <input className="input" readOnly value={email} />
        </div>
        <div>
          <label>Plant Name</label>
          <input
            className="input"
            value={plantName}
            onChange={({ target }) => setPlantName(target.value)}
          />
        </div>
        <div>
          <label className="options-list">Holes in leaves</label>
          <input
            type="checkbox"
            className="checkbox"
            name="dry-soil"
            onChange={({ target }) => setDrySoil(target.value)}
            value={drySoil}
          />
          <label>Yellow leaves</label>
          <input
            type="checkbox"
            className="checkbox"
            name="yellow-leaves"
            onChange={({ target }) => setYellowLeaves(target.value)}
            value={yellowLeaves}
          />
          <label>Dry soil</label>
          <input
            type="checkbox"
            className="checkbox"
            name="holes-in-leaves"
            onChange={({ target }) => setHolesInLeaves(target.value)}
            value={holesInLeaves}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            placeholder="Tell us the problem here"
            value={text}
            onChange={({ target }) => setText(target.value)}
          ></textarea>
        </div>
        {uploading ? (
          <Spinner />
        ) : (
          <div>
            <p>Please upload images of your plant</p>
            <label>Image</label>
            <input type="file" onChange={uploadFileHandler} />
          </div>
        )}

        <input value="Got it!" type="submit" />
        <button onClick={cancelComplaintHandler}>Cancel</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
