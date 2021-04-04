const User = require("../models/mysql/user");

exports.createUser = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.create({ email, password });
  res.json({ user });
};
