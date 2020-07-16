import { combineReducers } from 'redux';

// import itemsReducer from './items/itemsReducer';
import itemsReducer from './items/slice/itemSlice';

const rootReducer = combineReducers({
  items: itemsReducer
});
export default rootReducer;