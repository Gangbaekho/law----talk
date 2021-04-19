const DataLoader = require("dataloader");

const batchConsultingAnswers = async (ids, { ConsultingAnswer }) => {
  const consultingAnswers = await ConsultingAnswer.findAll({
    where: { consultingQuestionId: ids },
  });
  return ids.map((id) =>
    consultingAnswers.filter((c) => c.consultingQuestionId === id)
  );
};

const consultingAnswerLoader = (models) => ({
  consultingQuestion: new DataLoader((ids) =>
    batchConsultingAnswers(ids, models)
  ),
});

module.exports = consultingAnswerLoader;
