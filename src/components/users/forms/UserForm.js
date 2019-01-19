import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import Input from '../../common/forms/inputs/Input';

let UserForm = props => {
    const {
        onFormSubmit,
        valid,
        handleSubmit,
        pristine,
        reset,
        submitting,
    } = props;

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="form-group m-3 p-3">
            <Field
                name="name"
                type="text"
                label="Name"
                className="form-control"
                component={Input}
            />
            <Field
                name="email"
                type="text"
                label="Email"
                className="form-control"
                component={Input}
            />
            <Field
                name="password"
                type="password"
                label="Password"
                className="form-control"
                component={Input}
            />
            <button
                type="submit"
                className="btn btn-primary"
                disabled={!valid || pristine || submitting}
            >
                Submit
            </button>
        </form>
    );
};

UserForm = reduxForm ({
    form: 'UserForm', // a unique identifier for this form
    enableReinitialize: true,
}) (UserForm);

function mapStateToProps (state) {
    if (state.user.data)
        return {
            initialValues: state.user.data,
        };
    return {};
}
export default connect (mapStateToProps) (UserForm);