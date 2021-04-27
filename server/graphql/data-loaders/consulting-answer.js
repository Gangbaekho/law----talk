const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchConsultingAnswersByConsultingQuestionId = async (
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

const batchConsultingAnswersByLawyerId = async (
  lawyerIds,
  { ConsultingAnswer }
) => {
  return await repeatableReadTransaction(async () => {
    const consultingAnswers = await ConsultingAnswer.findAll({
      where: { lawyerId: lawyerIds },
    });
    return lawyerIds.map((id) =>
      consultingAnswers.filter(
        (consultingAnswer) => consultingAnswer.lawyerId === id
      )
    );
  });
};

const batchConsultingAnswersByConsultingAnswerId = async (
  consultingAnswerIds,
  { ConsultingAnswer }
) => {
  return await repeatableReadTransaction(async () => {
    const consultingAnswers = await ConsultingAnswer.findAll({
      where: { id: consultingAnswerIds },
    });
    return consultingAnswerIds.map((id) =>
      consultingAnswers.find((consultingAnswer) => consultingAnswer.id === id)
    );
  });
};

const consultingAnswerLoader = (models) => ({
  byConsultingQuestionId: new DataLoader((consultingQuestionIds) =>
    batchConsultingAnswersByConsultingQuestionId(consultingQuestionIds, models)
  ),
  byLawyerId: new DataLoader((lawyerIds) =>
    batchConsultingAnswersByLawyerId(lawyerIds, models)
  ),
  byConsultingAnswerId: new DataLoader((consultingAnswerIds) =>
    batchConsultingAnswersByConsultingAnswerId(consultingAnswerIds, models)
  ),
});

module.exports = consultingAnswerLoader;
