import express from "express";
import {
  getAllComplaints,
  getComplaint,
  registerComplaint,
  updateComplaint,
} from "../controllers/complaintController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, registerComplaint).get(admin, getAllComplaints);
router.route("/:id").put(protect, updateComplaint).get(admin, getComplaint);

export default router;
