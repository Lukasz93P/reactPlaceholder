import {
    FETCH_USERS_INIT,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USER_BY_ID_INIT,
    FETCH_USER_BY_ID_SUCCESS,
    FETCH_USER_BY_ID_FAILED
}
    from "../../actions/users/actionTypes";

const initialState = {
    users: {
        data: null,
        errors: null,
    },
    user: {
        data: null,
        errors: null,
        deleted: false,
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

/**
 *
 * @param state
 * @param action
 * @return {*}
 */
export const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case FETCH_USER_BY_ID_INIT: {
            return {...state, data: null, errors: null, deleted: false};
        }
        case FETCH_USER_BY_ID_SUCCESS: {
            return {...state, data: action.payload, errors: null, deleted: false};
        }
        case FETCH_USER_BY_ID_FAILED: {
            return {...state, data: null, errors: action.payload, deleted: false};
        }
        default: {
            return state;
        }
    }
};