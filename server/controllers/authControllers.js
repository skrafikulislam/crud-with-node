const User = require("../models/user.js");
const { hashPassword, comparePassword } = require("../helpers/auth.js");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("This is just a Test");
};

// Register Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //! Check if the name is entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    //! Check if the password is entered
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and be atleast 6 charecters on",
      });
    }
    //! Check if the email is already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);

    //! Creating The User Database on Mongo
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //! Check if User Exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "NO User Found Here",
      });
    }
    //! Checking the Password Match with the database
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Incorrect Password ",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
