import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import authReducer from "./auth-reducer";
import usersReducer from './users-reducer';
import  thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage:profilePageReducer,
    dialogsPage :dialogsPageReducer,
    sideBar:sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer,
    app:appReducer,

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//window.__store__ = store;
export default store;
