import { FETCH_CONSULTING_QUESTIONS } from "../action/consulting-questions";

const initialState = {
  consultingQuestions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONSULTING_QUESTIONS:
      return action.consultingQuestions;
  }
  return state;
};
