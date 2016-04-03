import { combineReducers } from 'redux';
import user from './user';
import entity from './entity';
//import keyword from './search';

export default combineReducers({
  user,
  entity,
  //keyword,
});

