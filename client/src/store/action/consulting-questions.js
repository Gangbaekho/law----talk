import GRAPHQL_ENDPOINT from "../../constant/graphqlEndpoint";

export const FETCH_CONSULTING_QUESTIONS = "FETCH_CONSULTING_QUESTIONS";

export const fetchConsultingQuestions = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      dispatch({
        type: FETCH_CONSULTING_QUESTIONS,
        consultingQuestions: resData.data.getConsultingQuestions,
      });
    } catch (err) {
      throw err;
    }
  };
};
