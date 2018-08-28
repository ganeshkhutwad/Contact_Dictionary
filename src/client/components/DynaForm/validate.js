/**
@author Ganesh Khutwad
 */
const validate = {
    required: value => (value || typeof value === 'number' ? undefined : 'Required'),

    maxLength: max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined,

    get maxLength15() {
        return this.maxLength(15);
    },

    minLength: min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined,

    get minLength2() {
        return this.minLength(2);
    },

    number: value => value && isNaN(Number(value)) ? 'Must be a number' : undefined,

    minValue: min => value => value && value < min ? `Must be at least ${min}` : undefined,

    get minValue13() {
        return this.minValue(13);
    },

    email: value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined,

    alphaNumeric: value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined,

    phoneNumber: value => value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined
}

export default validate;
