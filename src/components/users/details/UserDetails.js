import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {fetchUserById, fetchUserByIdInit, deleteUserById} from "../../../actions/users/usersActions";
import WithDelete from '../../common/hoc/WithDelete';
import UserInfo from './UserInfo';
import LoaderWithContent from '../../common/loadings/LoaderWithContent';

class UserDetails extends PureComponent {
    componentWillUnmount = () => {
        this.props.dispatch(fetchUserByIdInit());
    };

    render = () => {
        const user = this.props.data;
        const elementToRender = user ? <UserInfo {...user} onDelete={this.props.onDelete}/> : null;
        return (
            <div className="container-fluid row m-auto align-items-center">
                {elementToRender}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.user;
}

export default connect(mapStateToProps)(LoaderWithContent(WithDelete(UserDetails, deleteUserById), fetchUserById));