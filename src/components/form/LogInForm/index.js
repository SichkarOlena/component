import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {SIGN_UP_SCHEMA} from "../../../utilis/validationSchemas";
import style from "./LoginForm.module.scss";

const initialValues = {
    email:'',
    password:''
}
const LogInForm = (props) => {
    const onSubmit = (values, formikBag) => {
        console.log("values", values)
        console.log("formikBag", formikBag);
        formikBag.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchemas={SIGN_UP_SCHEMA}>
            {(formikProps) => {
               return (
                <Form className={style.form}>
        <Field
            type="email" name = "email" placehoider="email"/>
                    <ErrorMessage name = "email" component = "div" className={style.error}/>
                    {/*{formikProps.errors.email && formikProps.touched.email && (<div>{formikProps.errors.email}</div>)}*/}


        <Field
            type="password"
            name = "password"
            placehoider="password"/>
                    <ErrorMessage name = "password" component = "div" className={style.error}/>
                    {/*{formikProps.errors.password && formikProps.touched.password && (<div>{formikProps.errors.password}</div>)}*/}


                    <Field
            type="submit"
            value="Send"/>
                </Form>
            );
            }}
        </Formik>
    );

};

export default LogInForm;