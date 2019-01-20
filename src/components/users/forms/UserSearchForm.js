import React from 'react';
import {reduxForm} from 'redux-form';
import StandardForm from '../../common/forms/StandardForm';
import UserSearchFormFields from '../forms/formFields/UserSearchFormFields';
import * as validators from '../../../helpers/validation/Validators';

let UserSearchForm = props => <StandardForm {...props} validateEmail={validators.validateEmail} FormFields={UserSearchFormFields}/>;

UserSearchForm = reduxForm({
    form: 'UserSearchForm', // a unique identifier for this form
    enableReinitialize: true,
})(UserSearchForm);

// function mapStateToProps(state) {
//     if (state.user.data)
//         return {
//             initialValues: state.user.data,
//         };
//     return {};
// }

export default UserSearchForm;