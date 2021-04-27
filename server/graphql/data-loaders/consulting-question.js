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

const batchConsultingQuestionsBySpecificDomainId = async (
  specificDomainIds,
  { ConsultingQuestion }
) => {
  return await repeatableReadTransaction(async () => {
    const consultingQuestions = await ConsultingQuestion.findAll({
      where: { specificDomainId: specificDomainIds },
    });
    return specificDomainIds.map((id) =>
      consultingQuestions.filter(
        (consultingQuestion) => consultingQuestion.specificDomainId === id
      )
    );
  });
};

const batchConsultingQuestionsByUserId = async (
  userIds,
  { ConsultingQuestion }
) => {
  return await repeatableReadTransaction(async () => {
    const consultingQuestions = await ConsultingQuestion.findAll({
      where: { userId: userIds },
    });
    return userIds.map((id) =>
      consultingQuestions.filter(
        (consultingQuestion) => consultingQuestion.userId === id
      )
    );
  });
};

const consultingQuestionLoader = (models) => ({
  byConsultingQuestionId: new DataLoader((consultingQuestionIds) =>
    batchConsultingQuestionsByConsultingQuestionId(
      consultingQuestionIds,
      models
    )
  ),
  bySpecificDomainId: new DataLoader((specificDomainIds) =>
    batchConsultingQuestionsBySpecificDomainId(specificDomainIds, models)
  ),
  byUserId: new DataLoader((userIds) =>
    batchConsultingQuestionsByUserId(userIds, models)
  ),
});

module.exports = consultingQuestionLoader;
