import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const { combineReducers, createStore, applyMiddleware } = require("redux");

const reducers = combineReducers({

})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;