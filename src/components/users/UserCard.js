import React from 'react';

/**
 *
 * @param props
 * @return {*}
 */
export default props => {
    const {classes = []} = props;
    const {username, email} = props.user;

    return (
        <div className={`card text-center col-md-3 p-3 m-3 ${classes.join(' ')}`}>
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{email}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>);
};