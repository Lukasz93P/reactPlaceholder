import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, Switch, Route} from 'react-router-dom';

import * as usersActions from '../../actions/users/usersActions';
import UserDetails from './details/UserDetails';
import UserSearching from './searching/UserSearching';
import DeleteButton from '../common/buttons/built/DeleteButton';
import SearchButton from '../common/buttons/built/SearchButton';
import MaterializeTests from './MaterializeTests';
import UsersCardsList from './UsersCardsList';

class UsersList extends React.Component {
    componentDidMount = () => {
        this.dispatchSearchAction();
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.searchConditions !== this.props.searchConditions) {
            this.dispatchSearchAction();
        }
    };

    dispatchSearchAction = () => {
        const {searchConditions} = this.props;
        this.props.dispatch(usersActions.fetchUsers(searchConditions ? searchConditions : {}));
    };

    constClearSearchConditions = () => {
        this.props.dispatch(usersActions.searchUsersInit());
    };

    render = () => {
        const {searchConditions} = this.props;
        return (
            <div className="row container-fluid justify-content-center">
                {/*<MaterializeTests/>*/}
                <Switch>
                    <Route exact path="/users"
                           render={() => <div className="container-fluid row justify-content-center">
                               <div className="text-center m-auto p-3 col-12">
                                   {searchConditions ?
                                       <DeleteButton text="Show all"
                                                     onClick={this.constClearSearchConditions}/>
                                       : <Link to={"/users/search"}>
                                           <SearchButton text="Search"/>
                                       </Link>}
                               </div>
                               <UsersCardsList data={this.props.data}/>
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