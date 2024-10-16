const express = require("express"); // Import the express module
const router = express.Router(); // Create a new router object to handle routes

// Import the signup and login handlers from the auth controller
const { signup, login } = require("../controllers/user");


// Route for user login
// This route handles POST requests to /login and uses the login function from the auth controller
router.post("/login", login);

// Route for user signup
// This route handles POST requests to /signup and uses the signup function from the auth controller
router.post("/signup", signup);





