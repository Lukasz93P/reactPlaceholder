import * as redux from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {usersReducer} from "./users/usersReducers";

export default () => {
    const combinedReducer = redux.combineReducers({form: formReducer, users: usersReducer});

    return redux.createStore(combinedReducer, redux.applyMiddleware(logger, thunk));
}