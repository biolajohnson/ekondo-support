import Complaint from "../models/complaintModel.js";
import asyncHandler from "express-async-handler";

export const registerComplaint = asyncHandler(async (req, res) => {
  const complaint = new Complaint({
    user: req.user,
    text: "",
    drySoil: false,
    holesInLeaves: false,
    yellowLeaves: false,
    filePath: "/images/sample.jpg",
  });
  if (complaint) {
    const newComplaint = await complaint.save();
    res.status(201).json(newComplaint);
  } else {
    res.status(400);
    throw new Error("Something strange happened");
  }
});

export const updateComplaint = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { text, drySoil, yellowLeaves, holesInLeaves, filePath } = req.body;

  const foundComplaint = await Complaint.findById(id);

  if (foundComplaint) {
    foundComplaint.text = text;
    foundComplaint.drySoil = drySoil;
    foundComplaint.yellowLeaves = yellowLeaves;
    foundComplaint.holesInLeaves = holesInLeaves;
    foundComplaint.filePath = filePath;

    const updatedFoundComplaint = await foundComplaint.save();
    res.json(updatedFoundComplaint);
  } else {
    res.status(404);
    throw new Error("Not found");
  }
});

export const getComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);
  if (complaint) {
    res.status(200).json(complaint);
  } else {
    res.status(400);
    throw new Error("Complaint not found");
  }
});

export const getAllComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({});
  if (complaints) {
    res.status(200).json(complaints);
  } else {
    res.status(400);
    throw new Error("Complaints not found");
  }
});

export const deleteComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findByIdAndDelete(req.params.id);
  if (complaint) {
    res.status(200);
  } else {
    res.status(500);
    throw new Error("Complaint not found");
  }
});
