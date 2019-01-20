import React from 'react';

export default props => {
    const {name, username} = props;

    return (<div className="card">
        <div className="card-header">
            Personal data
        </div>
        <div className="card-body">
            {name ? <h5 className="card-title">Name : {name}</h5> : null}
            {username ? <p className="card-text">Username : {username}</p> : null}
        </div>
    </div>);
};