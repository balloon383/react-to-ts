import React, { useState } from 'react'
import styles from './styles.module.css'
import { Formik } from "formik";
import {Button, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import {getUsers, changeStatus} from '../../api/api.js'
import {setUserAction} from '../../redux/actions/userActions.js'
import { Navigate, Link } from "react-router-dom";



export default function Login() {

  let [redirect, setRedirect] = useState(false)
  const dispatch = useDispatch()
  

async function checkUser(email, password) {
    let usersArr = await getUsers();
    let errors = {}
    const userCheck = usersArr.find((el) => el.email === email);
    if (!userCheck) {
        errors.email = "Invalid email address"
        return errors
      }
      
    if (userCheck.password !== password) {
        errors.password = <p>Invalid password</p>
        return errors
      }
      
    const user = await changeStatus(userCheck, "true");
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        email: user.email,
        name: user.name,
        id: user.id,
        role: user.role,
        status: user.status,
        posts: user.posts ?? [], 
        comments: user.comments ?? []
      })
    );
    dispatch(setUserAction(user));
    setRedirect(true)
    return {}
  }

  if (redirect === true) {
    return <Navigate to='/'/>
} 
  

  return (
    <section className={styles.login}>
      <section className={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = 'Enter your password!'
            }
            if(Object.keys(errors).length === 0){
                let loginValidation = checkUser(values.email, values.password)
                errors = loginValidation
            }
            return errors;

          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={styles.formBox}>
              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email && errors.email}
              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
              />
              {errors.password && touched.password && errors.password}
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={isSubmitting}
                className={styles.loginButton}
                size="large"
              >
                Log In
              </Button>
              <Link to="/register">
                <Button variant="contained" color="error" size="small">
                  Register
                </Button>
              </Link>
              
            </form>
          )}
        </Formik>
      </section>
    </section>
  );
}
