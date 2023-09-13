import React from 'react'
import styles from './style.module.css'
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";

export default function Register() {
  return (
    <section className={styles.register}>
      <section className={styles.container}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            passwordVerify: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required Email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.name) {
              errors.name = "Required Name";
            } else if (values.name.length < 2) {
              errors.name = "Name length 2+";
            }

            if (values.passwordVerify !== values.password) {
              errors.passwordVerify = "Password don`t match";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
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
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="name"
              />
              {errors.name && touched.name && errors.name}
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
              <TextField
                type="password"
                name="passwordVerify"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordVerify}
                placeholder="Password Verify"
              />
              {errors.passwordVerify &&
                touched.passwordVerify &&
                errors.passwordVerify}
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={isSubmitting}
                className={styles.loginButton}
                size="large"
              >
                Register
              </Button>
            </form>
          )}
        </Formik>
      </section>
    </section>
  );
}
