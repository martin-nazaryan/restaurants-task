import { notification } from 'antd';

import store from '../store';

import FAKE_RESTAURANTS_DATA from '../constants/restaurants';

export const fakeAuth = {
  isAuthenticated: false,
  registerNewUser(user) {
    return new Promise((resolve, reject) => {
      const { usersReducer: { users } } = store.getState();

      const existedUser = users.find((u) => u.username === user.username);
      if (existedUser) {
        reject(new Error('User is exists'));
        return;
      }

      fakeAuth.isAuthenticated = true;

      setTimeout(() => resolve(), 1000);
    });
  },
  authenticate(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const { usersReducer: { users } } = store.getState();
        const existedUser = users.find((u) => u.username === user.username);

        if (existedUser && existedUser.password === user.password) {
          resolve();
          return;
        }

        reject(new Error('Username or password is incorrect'));
      }, 1000);
    });
  },
  signOut() {
    return new Promise((resolve) => {
      fakeAuth.isAuthenticated = false;
      setTimeout(resolve, 1000);
    });
  },
};

export const fakeData = {
  getRestaurants() {
    return Promise.resolve(FAKE_RESTAURANTS_DATA);
  },
  getRestaurant(id) {
    return Promise.resolve(FAKE_RESTAURANTS_DATA.find((rest) => rest.key === id));
  },
  leaveComment(restaurantId, username, comment) {
    const restaurant = FAKE_RESTAURANTS_DATA.find((rest) => rest.key === restaurantId);
    restaurant.comments.push({
      username,
      comment,
    });
    return Promise.resolve(restaurant);
  },
  rate(restaurantId, username, rate) {
    const restaurant = FAKE_RESTAURANTS_DATA.find((rest) => rest.key === restaurantId);
    const userRateExists = restaurant.ratings.find((r) => r.username === username);
    if (!userRateExists) {
      restaurant.ratings.push({
        username,
        rate,
      });
    } else {
      userRateExists.rate = rate;
    }

    return Promise.resolve(restaurant);
  },
};

export const openNotification = (type, message, description = '') => {
  notification[type]({
    duration: 3,
    message,
    description,
  });
};
