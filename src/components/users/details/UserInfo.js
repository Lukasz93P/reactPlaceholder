import React from 'react';

import Address from '../../common/details/Address';
import CompanyData from '../../common/details/CompanyData';
import Contact from '../../common/details/Contact';
import PersonalData from '../../common/details/PersonalData';
import DeleteButton from '../../common/buttons/built/DeleteButton';

export default props => {
    const {address, company, onDelete} = props;

    return (
        <div className="container row m-auto p-3 m-3">
            <div className="col-md-6 align-self-start justify-content-center m-auto">
                <div className="p-3 w-100 m-auto"><PersonalData {...props}/></div>
                <div className="p-3 w-100 m-auto"><Address {...address}/></div>
            </div>
            <div className="col-md-6 align-self-end justify-content-center m-auto">
                <div className="p-3 w-100 m-auto"><Contact {...props}/></div>
                <div className="p-3 w-100 m-auto"><CompanyData {...company}/></div>
            </div>
            <div className="col-12 self-align-center text-center">
                <DeleteButton onClick={onDelete} text="Delete"/>
            </div>
        </div>);
}