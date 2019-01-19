import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {fetchUserById, deleteUserById} from "../../../actions/users/usersActions";
import WithDelete from '../../common/hoc/WithDelete';
import UserInfo from './UserInfo';
import Loader from '../../common/loadings/BasicLoader';

class UserDetails extends PureComponent {
    componentDidMount = () => {
        const userId = this.props.match.params.id;
        this.props.dispatch(fetchUserById(userId));
    };

    render = () => {
        const user = this.props.data;
        const elementToRender = user ? <UserInfo {...user} onDelete={this.props.onDelete}/> : <Loader/>;
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

export default connect(mapStateToProps)(WithDelete(UserDetails, deleteUserById));