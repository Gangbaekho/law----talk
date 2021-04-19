const ConsultingAnswer = require("../../models/mysql/consulting-answer");

const DataLoader = require("dataloader");

const batchLoadFn = async (consultingQuestionIds) => {
  const consultingAnswers = await ConsultingAnswer.findAll({
    where: { consultingQuestionId: consultingQuestionIds },
  });
  return consultingQuestionIds.map((id) =>
    consultingAnswers.filter((c) => c.consultingQuestionId === id)
  );
};

const consultingAnswerDataLoader = () => new DataLoader(batchLoadFn);

module.exports = consultingAnswerDataLoader;

// const batchLoadFnWithConsultingQuestionIds = async (consultingQuestionIds) => {
//   const consultingAnswers = await ConsultingAnswer.findAll({
//     where: { consultingQuestionId: consultingQuestionIds },
//   });
//   return consultingQuestionIds.map((id) =>
//     consultingAnswers.filter((c) => c.consultingQuestionId === id)
//   );
// };

// const consultingAnswerLoader = () => ({
//   consultingQuestion: () =>
//     new DataLoader(batchLoadFnWithConsultingQuestionIds),
// });

// module.exports = consultingAnswerLoader;
