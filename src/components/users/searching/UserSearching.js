import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import UserSearchForm from '../forms/UserSearchForm';
import {searchUsersInit, searchUserConditionsSubmitted} from "../../../actions/users/usersActions";

class UserSearching extends Component {
    componentDidMount = () => {
        this.props.dispatch(searchUsersInit());
    };

    onSearchFormSubmit = values => {
        this.props.dispatch(searchUserConditionsSubmitted(values));
        this.props.history.push('/users');
    };

    render = () => {
        const onFormSubmit = this.onSearchFormSubmit;
        return (
            <div className="text-center">
                <UserSearchForm onFormSubmit={onFormSubmit}/>
            </div>
        );
    };
}

export default withRouter(connect()(UserSearching));