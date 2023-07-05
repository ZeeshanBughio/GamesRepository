const initialState = {
  numbers: [],
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITION':
      return {
        ...state,
        result: action.payload,
      };
    case 'SUBTRACTION':
      return {
        ...state,
        result: action.payload,
      };
    case 'DIVISION':
      return {
        ...state,
        result: action.payload,
      };
    case 'MULTIPLICATION':
      return {
        ...state,
        result: action.payload,
      };
    case 'CLEAR_CALCULATOR':
      return {
        ...state,
        result: 0,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
