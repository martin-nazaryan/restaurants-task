import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import AppLayout from './components/layout';

import './App.scss';

const App = () => (
  <Provider store={store}>
    <AppLayout />
  </Provider>
);

export default App;
