import React from 'react';

export default props => {
    const {city, street, suite, zipcode} = props;

    return (<div className="card">
        <div className="card-header">
            Address
        </div>
        <div className="card-body">
            {city ? <h5 className="card-title">City : {city}</h5> : null}
            {street ? <p className="card-text">Street : {street}</p> : null}
            {suite ? <p className="card-text">Suite : {suite}</p> : null}
            {zipcode ? <p className="card-text">Zipcode : {zipcode}</p> : null}
        </div>
    </div>);
};