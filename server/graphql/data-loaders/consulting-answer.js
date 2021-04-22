const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchConsultingAnswersWithConsultingQuestionIds = async (
  consultingQuestionIds,
  { ConsultingAnswer }
) => {
  return await repeatableReadTransaction(async () => {
    const consultingAnswers = await ConsultingAnswer.findAll({
      where: { consultingQuestionId: consultingQuestionIds },
    });
    return consultingQuestionIds.map((id) =>
      consultingAnswers.filter((c) => c.consultingQuestionId === id)
    );
  });
};

const consultingAnswerLoader = (models) => ({
  consultingQuestion: new DataLoader((ids) =>
    batchConsultingAnswersWithConsultingQuestionIds(ids, models)
  ),
});

module.exports = consultingAnswerLoader;
