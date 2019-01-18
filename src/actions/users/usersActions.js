import {FETCH_USERS_INIT, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED} from "./actionTypes";
import UsersService from '../../services/axios/users/UsersService';

/**
 *
 * @param {object} conditions
 * @return {Function}
 */
export const fetchUsers = (conditions = {}) => {
    fetchUsersInit();

    return async dispatch => {
        try {
            const response = await UsersService.fetchAll(conditions);
            dispatch(fetchUsersSuccess(response.data));
        } catch (e) {
            dispatch(fetchUsersFailed(e));
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