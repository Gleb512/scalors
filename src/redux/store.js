import {applyMiddleware, combineReducers, createStore} from "redux"
import projectsReducer from "./project-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducerPack = combineReducers({
    projects: projectsReducer,
    form: formReducer
})

let store = createStore(reducerPack, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;