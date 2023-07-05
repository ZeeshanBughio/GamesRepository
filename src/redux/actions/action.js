import * as types from '../const/const';

export const addNumber = (value1, value2) => dispatch => {
  const addition = parseInt(value1) + parseInt(value2);
  dispatch({
    type: types.ADDITION,
    payload: addition,
  });
};

export const subtractnumber = (value1, value2) => dispatch => {
  const subtraction = parseInt(value1) - parseInt(value2);
  dispatch({
    type: types.SUBTRACTION,
    payload: subtraction,
  });
};

export const dividenumber = (value1, value2) => dispatch => {
  const division = parseInt(value1) / parseInt(value2);
  dispatch({
    type: types.DIVISION,
    payload: division,
  });
};

export const multiplynumber = (value1, value2) => dispatch => {
  const multiply = parseInt(value1) * parseInt(value2);
  dispatch({
    type: types.MULTIPLICATION,
    payload: multiply,
  });
};

export const clearCalculator = () => {
  return {
    type: 'CLEAR_CALCULATOR',
    payload: 0,
  };
};
