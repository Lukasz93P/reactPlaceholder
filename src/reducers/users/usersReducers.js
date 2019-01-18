import {FETCH_USERS_INIT, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED} from "../../actions/users/actionTypes";

const initialState = {
    users: {
        data: null,
        errors: null,
    }
};

/**
 *
 * @param state
 * @param action
 * @return {*}
 */
export const usersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case FETCH_USERS_INIT: {
            return {...state, data: null, errors: null};
        }
        case FETCH_USERS_SUCCESS: {
            return {...state, data: action.payload, errors: null};
        }
        case FETCH_USERS_FAILED: {
            return {...state, data: null, errors: action.payload};
        }
        default: {
            return state;
        }
    }
};