import {
    FETCH_USERS_INIT,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USER_BY_ID_INIT,
    FETCH_USER_BY_ID_SUCCESS,
    FETCH_USER_BY_ID_FAILED,
    DELETE_USER_BY_ID_INIT,
    DELETE_USER_BY_ID_SUCCESS,
    DELETE_USER_BY_ID_FAILED,
} from "./actionTypes";
import UsersService from '../../services/axios/users/UsersService';

/**
 *
 * @param {object} conditions
 * @return {Function}
 */
export const fetchUsers = (conditions = {}) => {
    return async dispatch => {
        dispatch(fetchUsersInit());
        try {
            const response = await UsersService.fetchAll(conditions);
            dispatch(fetchUsersSuccess(response.data));
        } catch (e) {
            dispatch(fetchUsersFailed(e.message));
        }
    }
};

/**
 *
 * @return {{type: string}}
 */
const fetchUsersInit = () => {
    return {type: FETCH_USERS_INIT}
};

/**
 *
 * @param {object} users
 * @return {{type: string, payload: *}}
 */
const fetchUsersSuccess = users => {
    return {type: FETCH_USERS_SUCCESS, payload: users};
};

/**
 *
 * @param {object} errors
 * @return {{type: string, payload: *}}
 */
const fetchUsersFailed = errors => {
    return {type: FETCH_USERS_FAILED, payload: errors};
};

export const fetchUserById = id => {
    return async dispatch => {
        dispatch(fetchUserByIdInit());
        try {
            const response = await UsersService.fetchById(id);
            dispatch(fetchUserByIdSuccess(response.data));
        } catch (e) {
            dispatch(fetchUserByIdFailed(e.message));
        }
    };
};

const fetchUserByIdInit = () => {
    return {type: FETCH_USER_BY_ID_INIT, asdasdasd: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'};
};

const fetchUserByIdSuccess = user => {
    return {type: FETCH_USER_BY_ID_SUCCESS, payload: user};
};

const fetchUserByIdFailed = errors => {
    return {type: FETCH_USER_BY_ID_FAILED, payload: errors};
};

export const deleteUserById = id => {
    deleteUserByIdInit();

    return async dispatch => {
        try {
            const response = await UsersService.deleteById(id);
            dispatch(deleteUserByIdSuccess(id));
        } catch (e) {
            dispatch(deleteUserByIdFailed(e.message));
        }
    };
};

const deleteUserByIdInit = () => {
    return {
        type: DELETE_USER_BY_ID_INIT,
    };
};

const deleteUserByIdSuccess = deletedUserId => {
    return {type: DELETE_USER_BY_ID_SUCCESS, payload: deletedUserId,}
};

const deleteUserByIdFailed = errors => {
    return {type: DELETE_USER_BY_ID_FAILED, payload: errors};
};