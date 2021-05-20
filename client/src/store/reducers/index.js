import {applyMiddleware, combineReducers, compose} from 'redux';
import todos from "./todos";
import users from "./users";
import thunk from "redux-thunk";

export default combineReducers({ todos, users }, compose(applyMiddleware(thunk)));