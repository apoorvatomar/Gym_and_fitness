const bcrypt = require("bcrypt");
const User = require("../Models/user-model");

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Hello, My dear friends My name is Rahul Kushwaha.By using Router controller change 2"
      );
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, age, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      age,

      password,
    });

    res.status(201).json({
      message: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const match = await bcrypt.compare(password, userExist.password);

    if (!match) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }

    res.status(200).json({
      message: "Login successful",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { home, register, login };
