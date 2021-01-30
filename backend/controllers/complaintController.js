import Complaint from "../models/complaintModel.js";
import asyncHandler from "express-async-handler";

export const registerComplaint = asyncHandler(async (req, res) => {
  const { text, dry_soil, yellow_leaves, holes_in_leaves } = req.body;

  const complaint = new Complaint({
    text,
    dry_soil,
    holes_in_leaves,
    yellow_leaves,
    image: "/img/sample.jpg",
  });
  if (complaint) {
    const newComplaint = await complaint.save();
    res.status(201).json(newComplaint);
  } else {
    res.status(400);
    throw new Error("Invalid complaint data");
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

export const updateComplaint = asyncHandler(async (req, res) => {
  const { text, dry_soil, yellow_leaves, holes_in_leaves, image } = req.body;

  const complaint = await Complaint.find(req.params.id);
  if (complaint) {
    complaint.text = text;
    complaint.dry_soil = dry_soil;
    complaint.yellow_leaves = yellow_leaves;
    complaint.image = image;
    complaint.holes_in_leaves = holes_in_leaves;

    const updatedComplaint = await complaint.save();
    res.json(updatedComplaint);
  } else {
    res.status(400);
    throw new Error("Something happened");
  }
});
