import * as yup from "yup";

const validations = yup.object().shape({
  username: yup
    .string()
    .min(4, "Kullanıcı adı minimum 4 karakterli olmalıdır.")
    .required("Zorunlu alan!"),
  email: yup
    .string()
    .email("Geçerli bir e-mail adresi giriniz.")
    .required("Zorunlu alan!"),
  password: yup
    .string()
    .min(8, "Şifreniz en az 8 karakter olmalıdır.")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])",
      `Şifreniz 
    en az bir büyük harf, bir küçük harf ve bir özel karakter içermelidir`
    )
    .required("Zorunlu alan!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler uyuşmuyor")
    .required("Zorunlu alan!"),
});

export default validations
