const initState = {
  options: {
    loading: false,
    question_category: ``,
    question_difficulty: ``,
    question_type: ``,
    amount_of_questions: 10,
  },
  questions: [],
  index: 0,
  score: 0,
}
  const Reducer = (state = initState, action) => {
    switch (action.type) {
      case "LOADING":
         return {...state, options: {
          ...state.options,
          loading: action.value
        }};
      case "CHANGE_CATEGORY":
         return {...state,  options: {
          ...state.options,
          question_category: action.value
        }}
      case "CHANGE_DIFFICULTY":
        return {...state, options: {
          ...state.options,
          question_difficulty: action.value
        }}
      case "CHANGE_TYPE":
        return {...state, options: {
          ...state.options,
          question_type: action.value
        }}  

      default:
        return state
    }
  }
  
export default Reducer
