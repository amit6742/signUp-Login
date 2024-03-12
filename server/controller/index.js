const User = require("../model/model");

exports.createUser = async (req, res) => {
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
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email: email }).then((saveUser) => {
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
};
//   get all find
exports.getUser = async (req, res) => {
  const user = await User.find();
  console.log(user);

  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
//  get user find by id base

exports.updateUser = async (req, res) => {
  const id = req.params.body;
  console.log(id);
  try {
    const doc = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
    console.log(doc, id);
  } catch (error) {
    res.status(400).json(error);
  }
};

//  delete user
exports.deleteUser = async (req, res) => {
  const id = req.params.body;
  console.log(id);

  try {
    const doc = await User.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};