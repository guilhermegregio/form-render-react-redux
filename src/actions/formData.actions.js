export const SUBMIT = 'SUBMIT';
export const START_VALIDATE = 'START_VALIDATE';
export const VALIDATE_ERROR = 'VALIDATE_ERROR';
export const VALIDATE_SUCCESS = 'VALIDATE_SUCCESS';

export const submit = () => ({
    type: SUBMIT
});

export const startValidate = () => ({
    type: START_VALIDATE
});

export const validateError = (field, value, error) => ({
    type: VALIDATE_ERROR,
    payload: { field, value, error }
});

export const validateSuccess = (field, value) => ({
    type: VALIDATE_SUCCESS,
    payload: { field, value }
});