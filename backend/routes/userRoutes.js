import express from "express";
import {
  getUserProfile,
  registerUser,
  authUser,
  updateUser,
  getUserById,
} from "../controllers/usersController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/:id").get(protect, getUserById).put(protect, updateUser);
router.route("/admin/login").post(protect, admin, authUser);
router.route("/").get(protect, getUserProfile);

export default router;
