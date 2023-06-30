import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Auth } from '../models/index';

export const register = async (req, res) => {
  try {
    // Checking existing user
    const existingAuth = await Auth.findOne({
      where: {
        [sequelize.Op.or]: [{ email: req.body.email }, { username: req.body.username }],
      },
    });

    if (existingAuth) {
      return res.status(409).json("User already exists!");
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Create user record
    const newAuth = await Auth.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    return res.json({ message: "User has been added successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    // Check user
    const Auth = await Auth.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!Auth) {
      return res.status(404).json("User not found!");
    }

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, Auth.password);

    if (!isPasswordCorrect) {
      return res.status(401).json("Wrong username or password!");
    }

    const token = jwt.sign({ id: Auth.id }, "jwtkey");
    const { password, ...other } = Auth.toJSON();

    return res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    }).json(other);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const logout = (req, res) => {
  return res.clearCookie("access_token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  }).json("User has been logged out.");
};
