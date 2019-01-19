import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, Switch, Route} from 'react-router-dom';

import UserCard from './UserCard';
import * as usersActions from '../../actions/users/usersActions';
import UserDetails from './details/UserDetails';
import Loader from '../common/loadings/BasicLoader';
import UserSearching from './searching/UserSearching';

class UsersList extends PureComponent {
    componentDidMount = () => {
        const {searchConditions} = this.props;
        this.props.dispatch(usersActions.fetchUsers(searchConditions ? searchConditions : {}));
    };

    render = () => {
        const usersList = this.props.data ? this.props.data.map(user => <UserCard user={user} key={user.id}
                                                                                  link={`/users/${user.id}`}/>)
            : <Loader/>;

        return (
            <div className="row container-fluid justify-content-center">
                <Route>
                </Route>
                <Switch>
                    <Route exact path="/users" render={() => <div className="container-fluid row justify-content-center">
                        <div className="text-center m-auto p-3 col-12"><Link to={"/users/search"}>
                            <button className="btn btn-lg btn-secondary">Search</button>
                        </Link></div>
                        {usersList}
                    </div>}/>
                    <Route exact path="/users/search" component={UserSearching}/>
                    <Route exact path="/users/:id" component={UserDetails}/>
                </Switch>
            </div>
        );
    }
}

/**
 *
 * @param {*} state
 * @return {initialState.users|{data, errors}}
 */
function mapStateToProps(state) {
    return state.users;
}

export default connect(mapStateToProps)(UsersList);