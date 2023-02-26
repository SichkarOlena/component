import * as Yup from "yup";

export const NAME_SCHEMA = Yup.string().trim().min(3, 'Must be more 2 symbols').max(17, 'Must be less 18 symbols').matches(/^[A-Z] [a-z] {2,16}$/, 'Must be latter in format like Alenka').required('Must required')

    export const EMAIL_SCHEMA = Yup.string().trim().email().required('Must required')
export const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[A-Z]) (?=.*?[a-z]) {8,16}$/).required()

export const SIGN_UP_SCHEMA = Yup.
object ({
    firstName: NAME_SCHEMA,
    lastName: Yup.string().trim().matches(/^[A-Z] [a-z] {2,16}$/).required('Must required'),
    email: EMAIL_SCHEMA,
    password: PASSWORD_SCHEMA,
    age: Yup.number().min(14).max(150).required('Must required'),
    isMale: Yup.boolean().required('Must required')
});

export const SIGN_IN_SCHEMA = Yup.object({
    email: EMAIL_SCHEMA,
    PASSWORD: PASSWORD_SCHEMA
});