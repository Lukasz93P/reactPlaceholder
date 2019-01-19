import React from 'react';

export default ({input, type, label, className, preSymbol, postSymbol, meta: {touched, error, warning}}) =>
    <div className="form-group">
        <label>{label}</label>
        <div className="input-group">
            {preSymbol && <div className="input-group-prepend">
                <div className="input-group-text">{preSymbol}</div>
            </div>}
            <input type={type} className={className} {...input}/>
            {postSymbol && <div className="input-group-append">
                <div className="input-group-text">{postSymbol}</div>
            </div>}
        </div>
        {touched && (error && <div className="alert alert-danger">{error}</div>)}
    </div>;