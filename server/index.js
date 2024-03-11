const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("../server/model/model");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB);
  try {
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      password,
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
    console.log(saveUser);
  } catch (error) {
    res.status(409).json(error);
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((saveUser) => {
    if (saveUser) {
      if (saveUser.password === password) {
        res.json("success");
        console.log(saveUser);
      } else {
        res.json("invalid password");
      }
    } else {
      res.json("already exists");
    }
  });
});

//   const { email, password } = req.body;
//   User.findOne({ email: email }, (err, saveUser) => {
//     if (saveUser) {
//       if (password === saveUser.password) {
//         res.send({ message: "login successfully",saveUser :saveUser });
//       } else {
//         res.send({ message: "invalid password" });
//       }
//     } else {
//       res.send({ message: "user not found" });
//     }
//   });
// });

connectDB();
app.listen(process.env.PORT, () =>
  console.log(`server is ready ${process.env.PORT}`)
);
