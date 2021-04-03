const User = require("../models/mysql/user");

exports.createUser = async (req, res, next) => {
  const name = req.body.name;
  const password = req.body.password;

  const user = await User.create({ name: name, password: password });
  console.log(user);
};
