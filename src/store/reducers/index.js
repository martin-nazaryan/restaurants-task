import { combineReducers } from 'redux';

import { usersReducer } from '../ducks/users';
import { restaurantsReducer } from '../ducks/restaurants';

export default combineReducers({
  usersReducer,
  restaurantsReducer,
});
