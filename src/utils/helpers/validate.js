import * as Yup from "yup";

const validationSignInSchema = Yup.object().shape({
  username: Yup.string().required("Name mandatory field!"),
  password: Yup.string().required("Password mandatory field!"),
});

export { validationSignInSchema };
