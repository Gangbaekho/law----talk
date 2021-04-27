const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchConsultingQuestionsByConsultingQuestionId = async (
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

const consultingQuestionLoader = (models) => ({
  byConsultingQuestionId: new DataLoader((consultingQuestionIds) =>
    batchConsultingQuestionsByConsultingQuestionId(
      consultingQuestionIds,
      models
    )
  ),
});

module.exports = consultingQuestionLoader;
