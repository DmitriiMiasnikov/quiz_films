import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import headerReducer from './headerReducer';
import mainPageReducer from './mainPageReducer'

const { combineReducers, createStore, applyMiddleware } = require("redux");

const reducers = combineReducers({
    header: headerReducer,
    mainPage: mainPageReducer
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;