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
router.route("/:id").get(protect, getUserById).put(protect, updateUser);
router.route("/admin/login").post(protect, authUser);
router.route("/admin").get(protect, admin, getUserProfile);

export default router;
