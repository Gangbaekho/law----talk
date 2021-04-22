const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchConsultingQuestions = async (
  consultingQuestionIds,
  { ConsultingQuestion }
) => {
  return await repeatableReadTransaction(async () => {
    const consultingQuestion = await ConsultingQuestion.findOne({
      where: { id: consultingQuestionIds },
    });
    return [consultingQuestion];
  });
};

const consultingQuestionLoader = (models) =>
  new DataLoader((ids) => batchConsultingQuestions(ids, models));

module.exports = consultingQuestionLoader;
