const express = require("express");
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile
} = require("../controllers/authControllers.js");

const router = express.Router();

// MiddleWare -->
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
