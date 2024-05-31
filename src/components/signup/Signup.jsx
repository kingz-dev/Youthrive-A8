import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MyAlert from "../myAlert/MyAlert";
import { useState } from "react";
import ConfirmModal from "../confirmModal/ConfirmModal";
import Blognav from "../blogNav/Blognav";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../../atoms/user";

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
  gender: Yup.string().required("Required"),
  terms: Yup.string()
  .matches(/true/, "  Accept to continue").required("Required"),
});

export const Signup = () => {
  let [isShow, setIsShow] = useState(true);
  let [user, setUser] = useRecoilState(userInfo);
  let redir = useNavigate();
  let [showModal, setShowModal] = useState(false);
  function handleDelete() {
    console.log('Blog Deleted Successfully');
  }
  return (
    <div>
      <Blognav />
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
        onSubmit={async(values) => {
          // same shape as initial values
          setIsShow(false)
          let upd = {
            id: values.email,
            role: 'normal',
            gender: values.gender,
            fullName: values.fullName,
            password: values.password,
            terms: values.terms
          }
          /*
            steps to prevent multiple signin with same email
            >get all users
          */
          try{
            let getUser = await axios.get(`http://localhost:8000/User`)
            let isUnique = false;
            getUser.data.forEach(each => {
              if(each.id === values.email) {
                isUnique = true;
              }
            })
            if (!isUnique){
          axios.post('http://localhost:8000/User',upd)
            .then(resp => {
              setUser({ isLoggedIn: true, data: resp.data });
              redir('/blogs');
            })
            .catch(err => {
              console.error(err);
            });
          console.log(upd);
            } else {
              alert('A user exist with this email');
            }
          } catch (err) {
            console.error(err)
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <fieldset>
              <label htmlFor="fullName">Full Name </label>
              <Field name="fullName" id="fullName" />
              {touched.fullName && errors.fullName && (
                <div>{errors.fullName}</div>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password </label>
              <Field type="password" name="password" id="password" />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email </label>
              <Field name="email" id="email" />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </fieldset>
            {/* <fieldset role="group" aria-labelledby="my-radio-group"> */}
            <fieldset>
              <span>Gender: </span>
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              {touched.gender && errors.gender && <div>{errors.gender}</div>}
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
      {/* Alert Text */}
      {isShow && <MyAlert isShow={isShow} msg='Please fill all the Fields' /> }
      <button onClick={() => setShowModal(true)}>Delete Blog</button>
      <ConfirmModal action={handleDelete} setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};
