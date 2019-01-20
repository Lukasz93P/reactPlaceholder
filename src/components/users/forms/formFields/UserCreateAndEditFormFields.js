import React from 'react';
import {Field} from "redux-form";

import Input from "../../../common/forms/inputs/Input";
import UserSearchFormFields from './UserSearchFormFields';

export default ({validatePassword, ...rest}) =>
    <div>
        <UserSearchFormFields {...rest}/>
        <Field
            name="password"
            type="password"
            label="Password"
            className="form-control"
            component={Input}
            validate={validatePassword ? validatePassword : null}
        />
    </div>
