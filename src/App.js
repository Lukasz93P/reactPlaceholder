import React, {Component} from 'react';
import './App.css';

import Navbar from './components/common/navbar/Navbar';
import UsersList from './components/users/UsersList';
import {Route} from 'react-router-dom';

class App extends Component {
    render() {

        return (
            <div className="App">
                <Navbar/>
                <Route path="/users" component={UsersList}/>
            </div>
        );
    }
}

export default App;
