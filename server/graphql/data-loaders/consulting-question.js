const DataLoader = require("dataloader");

const batchConsultingQuestions = async (
  consultingQuestionIds,
  { ConsultingQuestion }
) => {
  const consultingQuestion = await ConsultingQuestion.findOne({
    where: { id: consultingQuestionIds },
  });
  return [consultingQuestion];
};

const consultingQuestionLoader = (models) =>
  new DataLoader((ids) => batchConsultingQuestions(ids, models));

module.exports = consultingQuestionLoader;
