import React from 'react';
import {reduxForm} from 'redux-form';

import UserCreateAndEditFormFields from './formFields/UserCreateAndEditFormFields';
import StandardForm from '../../common/forms/StandardForm';

let UserCreateAndEditForm = props => <StandardForm {...props} FormFields={UserCreateAndEditFormFields}/>;