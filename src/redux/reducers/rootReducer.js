import {combineReducers} from 'redux';
import calculatorReducer from './authReducer';

const rootReducer = combineReducers({
  auth: calculatorReducer,
});

export default rootReducer;
