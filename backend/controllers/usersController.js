import Users from "../models/usersModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//authenticate user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (user && user.matchPassword(password)) {
    res.json({
      id: user._id,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      name: user.name,
    });
  } else {
    res.status(401);
    throw new Error("Unauthorized entry");
  }
});
// create or register new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await Users.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = new Users({
    name,
    email,
    password,
  });
  if (user) {
    await user.save();
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//get user's info after login
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});
//change user to have admin access
const updateUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  const user = await Users.findById(req.params.id);
  if (user) {
    user.isAdmin = isAdmin;
    user.name = name;
    user.email = email;
    user.password = password;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(400);
    throw new Error("User was not updated");
  }
});
//get user by the unique ID
const getUserById = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//get all the users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await Users.find({});
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(400);
    throw new Error("No user list found");
  }
});

export {
  getUserProfile,
  authUser,
  registerUser,
  updateUser,
  getUserById,
  getAllUsers,
};
