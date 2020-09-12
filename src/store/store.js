import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import headerReducer from './headerReducer';
import mainPageReducer from './mainPageReducer';
import quizReducer from './quizReducer';
import { combineReducers, createStore, applyMiddleware } from "redux";
import authReducer from './authReducer';

const reducers = combineReducers({
    header: headerReducer,
    mainPage: mainPageReducer,
    quiz: quizReducer,
    auth: authReducer
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;