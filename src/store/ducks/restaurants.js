/*
* Types
* */
import { fakeData } from '../../helpers';

export const RESTAURANTS = 'RESTAURANTS';
export const RESTAURANT = 'RESTAURANT';

/*
* Actions
* */
export const setRestaurants = (payload) => ({
  type: RESTAURANTS,
  payload,
});

export const setRestaurant = (payload) => ({
  type: RESTAURANT,
  payload,
});

/*
* Async Actions
* */
export const leaveComment = (restaurantId, userId, comment) => async (dispatch) => {
  try {
    const res = await fakeData.leaveComment(restaurantId, userId, comment);
    dispatch(setRestaurant({ ...res }));
  } catch (e) {
    console.log(e);
  }
};

export const rate = (restaurantId, userId, value) => async (dispatch) => {
  try {
    const res = await fakeData.rate(restaurantId, userId, value);
    dispatch(setRestaurant({ ...res }));
  } catch (e) {
    console.log(e);
  }
};

/*
* Reducers
* */
const initialState = {
  restaurants: [],
};

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case RESTAURANT:
      return {
        ...state,
        restaurant: action.payload,
      };
    default:
      return state;
  }
};
