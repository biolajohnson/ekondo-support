import express from "express";
import {
  getAllComplaints,
  getComplaint,
  registerComplaint,
  updateComplaint,
} from "../controllers/complaintController.js";
import { admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerComplaint).get(admin, getAllComplaints);
router.route("/:id").get(admin, getComplaint).put(updateComplaint);

export default router;
