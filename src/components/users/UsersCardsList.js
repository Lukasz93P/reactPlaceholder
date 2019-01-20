import React from 'react';

import UserCard from './UserCard';
import LoaderWithContent from '../common/loadings/LoaderWithContent';

const UsersCardsList = ({data, ...rest}) => {
    const cards = data ? data.map(user => <UserCard key={user.id} data={user} {...rest}
                                                    link={`/users/${user.id}`}/>) : null;
    return (
        <div className="container row justify-content-center">
            {cards}
        </div>);
};

export default LoaderWithContent(UsersCardsList);

