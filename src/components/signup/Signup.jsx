import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  fullName: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must Contain 8 Characters")
    .required()
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    ),
  gender: Yup.string().matches(/'male'||'female'/, "  select gender to continue").required("Required"),
  terms: Yup.string()
  .matches(/true/, "  Accept to continue").required("Required"),
});

export const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          gender: "",
          terms: "",
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <fieldset>
              <label htmlFor="fullName">Full Name</label>
              <Field name="fullName" id="fullName" />
              {touched.fullName && errors.fullName && (
                <div>{errors.fullName}</div>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <Field name="email" id="email" />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </fieldset>
            {/* <fieldset role="group" aria-labelledby="my-radio-group"> */}
            <fieldset>
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
            </fieldset>
            <fieldset>
              <label htmlFor="terms">Terms</label>
              <Field type="checkbox" name="terms" id="terms" />
              {touched.terms && errors.terms && <div>{errors.terms}</div>}
            </fieldset>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
