import React from 'react';

export default props => {
    const {name, catchPhrase} = props;

    return (<div className="card">
        <div className="card-header">
            Company data
        </div>
        <div className="card-body">
            {name ? <h5 className="card-title">Name : {name}</h5> : null}
            {catchPhrase ? <p className="card-text">Search description : {catchPhrase}</p> : null}
        </div>
    </div>);
};