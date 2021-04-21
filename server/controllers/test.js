const User = require("../models/mysql/user");
const ConsultingQuestion = require("../models/mysql/consulting-question");
const sequelize = require("../util/mysql");

exports.test = async (req, res, next) => {
  const result = await sequelize.transaction(async (t) => {
    const user = await User.create(
      { email: "tester@test.com", password: "123456" },
      { transcation: t }
    );

    throw new Error("something went wrong!");

    // userId, specificDomainId, title, content
    const consultingQuestion = await ConsultingQuestion.create(
      {
        userId: user.id,
        specificDomainId: 1,
        title: "안녕하세요요요요요",
        content: "안녕하세요요요요요",
      },
      { transcation: t }
    );
  });

  res.json({ message: "success" });
};
