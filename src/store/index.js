import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {};

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, middleware);

export default store;
