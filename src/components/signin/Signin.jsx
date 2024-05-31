import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MyAlert from "../myAlert/MyAlert";
import { useState } from "react";
import ConfirmModal from "../confirmModal/ConfirmModal";
import Blognav from "../blogNav/Blognav";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userInfo } from "../../atoms/user";
import { useNavigate } from "react-router-dom";

const Schema = Yup.object().shape({
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
    )
});

const Signin = () => {
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
      <h1>Signin</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={async(values) => {
          // same shape as initial values
          setIsShow(false)
          console.log(values);

          /*
          steps to login a user
          > 
           */
          try {
            let getUser = await axios.get(`http://localhost:8000/User/${values.email}`);
            if (getUser.data.password === values.password) {
              setUser({isLoggedIn: true, data: getUser.data});
              redir('/blogs');
            } else {
              alert('wrong email or password');
            }
          } catch (err) { }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <fieldset>
              <label htmlFor="email">Email</label>
              <Field name="email" id="email" />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
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

export default Signin
