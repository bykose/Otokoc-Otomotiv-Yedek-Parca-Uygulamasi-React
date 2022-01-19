import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validation";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function SignUp() {
  
  const { login} = useAuth();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      login({
        username: values.username,
        email: values.email,
        password: values.password,
      });

      navigate("/")
    },
  });

  const checkErrors = (input) => {

    if (input) {
      return input
    }
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpLabel}>Kayıt Ol</div>
      <div className={styles.signUpForm}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              className={styles.input}
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              placeholder="Kullanıcı Adı"
            />
          </div>
          <div>
            {checkErrors(formik.errors.username)}
          </div>
          <div>
            <input
              className={styles.input}
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email"
            />
          </div>
          <div>
            {checkErrors(formik.errors.email)}
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
            {checkErrors(formik.errors.password)}
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              name="passwordConfirm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirm}
              placeholder="Şifre Kontrol"
            />
          </div>
          <div>
            {checkErrors(formik.errors.passwordConfirm)}
          </div>
          <div>
            <button className={styles.signUpButton} type="submit">{`Kayıl Ol >`}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
