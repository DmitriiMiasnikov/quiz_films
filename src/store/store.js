import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import headerReducer from './headerReducer'

const { combineReducers, createStore, applyMiddleware } = require("redux");

const reducers = combineReducers({
    header: headerReducer
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;