
const express = require("express");
const router = express.Router();
const { User } = require("../chessSchema");
const sendVerifyEmail = require('../sendVerifyEmail'); // Adjust the path if needed

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    // Extract login credentials from the request body
    const { email, password } = req.body;

    // Find the user with the provided email in the database
    const user = await User.findOne({ email });

    // Check if the user exists and the password is correct
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Return a response indicating successful login
    const responseMessage = {
      message: "Login successful",
      user,
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
});

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    // Extract user registration data from the request body
    const { email, username, password } = req.body;

    // Perform necessary validation on the data
    // ...

    // Create a new user object based on the User model
    const newUser = new User({
      email,
      username,
      password,
      rating: 0, // Set initial rating if needed
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Return a response indicating successful registration
    const responseMessage = {
      message: "User registered successfully",
      user: savedUser,
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
});


module.exports = router;
