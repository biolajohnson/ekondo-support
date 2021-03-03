import express from "express";
import {
  getUserProfile,
  registerUser,
  authUser,
  updateUser,
  getUserById,
  getAllUsers,
} from "../controllers/usersController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router
  .route("/admin/users/:id")
  .get(protect, getUserById)
  .put(protect, updateUser);
router.route("/admin/login").post(protect, admin, authUser);
router.route("/admin/users").get(protect, admin, getAllUsers);
router.route("/me").get(protect, getUserProfile);

export default router;
