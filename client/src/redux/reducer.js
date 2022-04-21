const initState = {
  
    question_category: ``,
    question_difficulty: ``,
    question_type: ``,
    amount_of_questions: 10,
    score: 0

 
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_QUIZ':
      return {
        ...state,
        quiz: action.payload
      };
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        question_category: action.payload,
      };
    case 'CHANGE_DIFFICULTY':
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case 'CHANGE_TYPE':
      return {
        ...state,
        question_type: action.payload,
      };
    case 'CHANGE_AMOUNT':
      return {
        ...state,
        amount_of_question: action.payload,
      };
    case 'CHANGE_SCORE':
      return {
        ...state,
        score: action.payload,
      };
      default: return state

    }
  }

export default reducer;
