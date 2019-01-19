import React, {Component} from 'react';

import UserForm from '../forms/UserForm';

class UserSearching extends Component {
    onSearchFormSubmit = values => {
        console.log(values);
    };

    render = () => {
        const onFormSubmit = this.onSearchFormSubmit;
        return (
            <div className="text-center">
                <UserForm onFormSubmit={onFormSubmit}/>
            </div>
        );
    };
}

export default UserSearching;