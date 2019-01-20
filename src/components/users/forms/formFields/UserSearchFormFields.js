import React from 'react';
import {Field} from "redux-form";
import Input from "../../../common/forms/inputs/Input";

export default ({validateName, validateEmail, ...rest}) =>
    <div>
        <Field
            name="username"
            type="text"
            label="Name"
            className="form-control"
            component={Input}
            validate={validateName ? validateName : null}
        />
        <Field
            name="email"
            type="text"
            label="Email"
            className="form-control"
            component={Input}
            validate={validateEmail ? validateEmail : null}
        />
    </div>;