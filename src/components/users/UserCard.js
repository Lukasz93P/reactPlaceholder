import React from 'react';
import WithLink from '../common/hoc/WithLink';

/**
 *
 * @param props
 * @return {*}
 */
const UserCard = props => {
    const {classes = []} = props;
    const {username, email} = props.user;

    return (
        <div className={`card text-center p-3 m-3 no-underline ${classes.join(' ')}`}>
            <div className="card-body w-100">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{email}</p>
            </div>
        </div>);
};

export default WithLink(UserCard);