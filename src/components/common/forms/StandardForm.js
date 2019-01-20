import React from 'react';
import ButtonConfirm from "../buttons/built/ConfirmButton";

export default props => {
    const {
        onFormSubmit,
        valid,
        handleSubmit,
        pristine,
        reset,
        submitting,
        FormFields,
        ...rest
    } = props;
    return (<form onSubmit={handleSubmit(onFormSubmit)} className="form-group m-3 p-3">
        <FormFields {...rest}/>
        <ButtonConfirm
            type="submit"
            disabled={!valid || pristine || submitting}
            text="Submit"
        />
    </form>);
}