const initState = { loading: false, question_category: ``, question_difficulty: ``, question_type: ``,amount_of_questions: 30}
  
  const Reducer = (state = initState, action) => {
    switch (action.type) {
      case "LOADING":
         return {...state, location: action.payload, loading:true};
      case "CHANGE_CATEGORY":
         return {...state, question_category: action.value}
      case "CHANGE_DIFFICULTY":
        return {...state, question_difficulty: action.value}
      case "CHANGE_TYPE":
        return {...state, question_type: action.value}  
      case "CHANGE_AMOUNT":
        return {...state, amount_of_questions: action.value}
      default:
        return state
    }
  }
  
export default Reducer
