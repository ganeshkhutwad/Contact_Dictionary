/**
@author Ganesh Khutwad
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Button from '@material-ui/core/Button';
import validate from './validate';

const btn = {
    margin: '10px'
};
const fieldWidth = {
    width: '100%'
};

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

const { required, maxLength15, minLength2, alphaNumeric, email, number, phoneNumber } = validate;
class DynaForm extends Component {

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize = () => {
        this.props.initialize(this.props.formValues);
    }

  render() {
      const { handleSubmit, pristine, reset, submitting } = this.props;
      return (
        <form onSubmit={handleSubmit} autocomplete="off">
        <div>
            <Field
            style={fieldWidth}
            name="id"
            component={renderTextField}
            label="Id"
            disabled="true"
            />
        </div>
        <div>
            <Field
            style={fieldWidth}
            name="firstName"
            component={renderTextField}
            label="First Name"
            validate={[required, maxLength15, minLength2, alphaNumeric]}
            />
        </div>
        <div>
            <Field style={fieldWidth} name="lastName" component={renderTextField} label="Last Name" validate={[required, maxLength15, minLength2, alphaNumeric]} />
        </div>
        <div>
            <Field style={fieldWidth} name="email" component={renderTextField} label="Email" validate={[required, email]}/>
        </div>
        <div>
            <Field validate={[required, phoneNumber]} style={fieldWidth} name="mobileNum" component={renderTextField} label="Mobile Number" />
        </div>
        <div>
            <Field
            style={fieldWidth}
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
            <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" style={btn}>
                Submit
            </Button>
            <Button onClick={reset} disabled={pristine || submitting} variant="contained" style={btn}>
                Reset
            </Button>
        </div>
        </form>
    );
  }
};

export default reduxForm({
  form: 'DynaForm', // a unique identifier for this form
})(DynaForm);
