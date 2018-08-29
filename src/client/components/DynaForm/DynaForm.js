/**
@author Ganesh Khutwad
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Button from '@material-ui/core/Button';
import validate from './validate';

const styles = () => ({
    btn: {
        marginLeft: '14px',
        float: 'right'
    },
    fieldWidth: {
        width: '100% !important'
    }
});

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderSelectField = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

const { required, maxLength15, minLength2, alphaNumeric, email, phoneNumber } = validate;

class DynaForm extends Component {

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize = () => {
        this.props.initialize(this.props.formValues);
    }

    render() {
        const { classes, handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit} autocomplete="off">
            <div>
                <Field
                className={classes.fieldWidth}
                name="id"
                component={renderTextField}
                label="Id"
                disabled="true"
                />
            </div>
            <div>
                <Field
                className={classes.fieldWidth}
                name="firstName"
                component={renderTextField}
                label="First Name"
                validate={[required, maxLength15, minLength2, alphaNumeric]}
                />
            </div>
            <div>
                <Field className={classes.fieldWidth} name="lastName" component={renderTextField} label="Last Name" validate={[required, maxLength15, minLength2, alphaNumeric]} />
            </div>
            <div>
                <Field className={classes.fieldWidth} name="email" component={renderTextField} label="Email" validate={[required, email]}/>
            </div>
            <div>
                <Field validate={[required, phoneNumber]} className={classes.fieldWidth} name="mobileNum" component={renderTextField} label="Mobile Number" />
            </div>
            <div>
                <Field
                className={classes.fieldWidth}
                name="status"
                component={renderSelectField}
                label="Status"
                validate={required}
                >
                <MenuItem value="active" primaryText="Active" />
                <MenuItem value="inactive" primaryText="Inactive" />
                </Field>
            </div>
            <div>
                <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" className={classes.btn}>
                    Submit
                </Button>
                <Button onClick={reset} disabled={pristine || submitting} variant="contained" className={classes.btn}>
                    Reset
                </Button>
            </div>
            </form>
        );
    }
}

DynaForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'DynaForm', // a unique identifier for this form
})(withStyles(styles)(DynaForm));
