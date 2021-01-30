import express from "express";
import {
  getUserProfile,
  registerUser,
  authUser,
  updateUser,
} from "../controllers/usersController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/:id").put(protect, updateUser);
router.route("/admin/login").post(protect, admin, authUser);
router.route("/admin").get(protect, admin, getUserProfile);

export default router;
