const Lawyer = require("../models/mysql/lawyer");

exports.createLawyer = (req, res, next) => {
  const mongodbId = req.body.mongodbId;
  const email = req.body.email;
  const password = req.body.password;
  const isPremium = req.body.isPremium;

  Lawyer.create({ email, password, isPremium, mongodbId })
    .then((lawyer) => {
      res.json({ lawyer });
    })
    .catch((error) => {
      console.log(error);
    });
};
