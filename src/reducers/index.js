import { combineReducers } from 'redux';
import modal from './modalReducer';
import magic from './magicReducer';

const rootReducer = combineReducers({
  modal,
  magic,
});

export default rootReducer;
