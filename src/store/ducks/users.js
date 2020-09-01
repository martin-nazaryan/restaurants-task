/*
* Types
* */
import { fakeAuth } from '../../helpers';

export const USER = 'USER';
export const USERS = 'USERS';

/*
* Actions
* */
export const setUser = (payload) => ({
  type: USER,
  payload,
});

export const addNewUser = (payload) => ({
  type: USERS,
  payload,
});

/*
* Async Actions
* */
export const registerNewUser = (newUser) => async (dispatch) => {
  try {
    await fakeAuth.registerNewUser(newUser);
    dispatch(addNewUser(newUser));
    dispatch(setUser(newUser));
  } catch (e) {
    console.log(e);
  }
};

/*
* Reducers
* */
const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case USERS:
      return {
        ...state,
        users: [
          ...state.users,
          action.payload,
        ],
      };
    default:
      return state;
  }
};
