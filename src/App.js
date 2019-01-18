import React, {Component} from 'react';
import './App.css';
import Navbar from './components/common/navbar/Navbar';
import {connect} from 'react-redux';
import UserCard from './components/users/UserCard';
import * as usersActions from './actions/users/usersActions';

class App extends Component {
    componentDidMount = () => {
        this.props.dispatch(usersActions.fetchUsers({username:'Bret'}))
    };

    render() {
        const usersList = this.props.data ? this.props.data.map(user => <UserCard user={user} key={user.id}/>) : null;
        return (
            <div className="App">
                <Navbar/>
                {usersList}
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

export default connect(mapStateToProps)(App);
