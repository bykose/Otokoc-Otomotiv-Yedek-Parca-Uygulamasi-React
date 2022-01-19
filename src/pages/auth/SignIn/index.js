import React from "react";
import { useFormik } from "formik";
import { useAuth } from "../../../contexts/AuthContext";
import { Alert } from "react-bootstrap";
import {Navigate} from "react-router-dom";
import styles from "./styles.module.css";

function SignIn() {
  const { isLogin, checkUser, alert } = useAuth();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      checkUser({
        username: values.username,
        email: values.username,
        password: values.password,
      });
    },
  });
  
  return (
    <div className={styles.signIn}>
      {
        isLogin&&<Navigate  to="/"/>
      }
      {alert && (
        <Alert variant="danger" dismissible>
          <Alert.Heading>Hatalı Email ya da Parola</Alert.Heading>
        </Alert>
      )}
      <div className={styles.signInLabel}>{`Giriş`} </div>
      <div className={styles.signInForm}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              className={styles.input}
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              placeholder="Email/Kullanıcı Adı"
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Şifre"
            />
          </div>
          <div>
            <button className={styles.signInButton} type="submit">{`Giriş Yap >`}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
