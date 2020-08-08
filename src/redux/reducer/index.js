import {combineReducers} from 'redux';
import rootReducer from "./rootReducer";
import falseReducer from "./falseReducer";

export default combineReducers({todos, visibilityFilter});