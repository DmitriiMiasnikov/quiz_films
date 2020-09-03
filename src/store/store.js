import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import headerReducer from './headerReducer';
import mainPageReducer from './mainPageReducer';
import quizReducer from './quizReducer';

const { combineReducers, createStore, applyMiddleware } = require("redux");

const reducers = combineReducers({
    header: headerReducer,
    mainPage: mainPageReducer,
    quiz: quizReducer
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;