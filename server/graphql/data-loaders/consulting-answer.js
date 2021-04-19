const DataLoader = require("dataloader");

const batchConsultingAnswersWithConsultingQuestionIds = async (
  consultingQuestionIds,
  { ConsultingAnswer }
) => {
  const consultingAnswers = await ConsultingAnswer.findAll({
    where: { consultingQuestionId: consultingQuestionIds },
  });
  return consultingQuestionIds.map((id) =>
    consultingAnswers.filter((c) => c.consultingQuestionId === id)
  );
};

const consultingAnswerLoader = (models) => ({
  consultingQuestion: new DataLoader((ids) =>
    batchConsultingAnswersWithConsultingQuestionIds(ids, models)
  ),
});

module.exports = consultingAnswerLoader;
