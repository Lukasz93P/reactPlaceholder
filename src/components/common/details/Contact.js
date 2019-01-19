import React from 'react';

export default props => {
    const {email, phone, website} = props;

    return (<div className="card">
        <div className="card-header">
            Contact
        </div>
        <div className="card-body">
            {email ? <h5 className="card-title">Email : {email}</h5> : null}
            {phone ? <p className="card-text">Phone : {phone}</p> : null}
            {website ? <p className="card-text">Website : {website}</p> : null}
        </div>
    </div>);
};