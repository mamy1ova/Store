import { CircularProgress, Typography, styled } from "@mui/material";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useFormik } from "formik";
import { validationSignInSchema } from "../utils/helpers/validate";
import { showErrors } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { REQUESTS_SIGN_IN } from "../redux/slices/sign-in-slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { isLoading } = useSelector((state) => state.signIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    toast
      .promise(dispatch(REQUESTS_SIGN_IN.fetchSignIn(values)), {
        success: "Successfully entered 👌",
        pending: "Hold on 🕐",
      })
      .then(() => {
        navigate("/profile");
      });

    resetForm();
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validateOnChange: false,
    validationSchema: validationSignInSchema,
  });

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <Input
          name="username"
          placeholder="Name"
          onChange={handleChange}
          value={values.username}
        />

        <Input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />

        {showErrors(errors) && (
          <Typography color="red">{showErrors(errors)}</Typography>
        )}

        <Button type="submit">
          {isLoading ? <CircularProgress /> : "Submit"}
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default SignIn;

const StyledContainer = styled("div")(() => ({
  display: "flex",
  margin: "auto",
  marginTop: "10rem",
  justifyContent: "center",
  backgroundColor: "#fff",
  border: "none",
  borderRadius: "0.5rem",
  width: "26rem",
  height: "26rem",
  boxShadow:
    "0.5px 2.3px 10px rgba(75, 74, 74, 0.349), 1.3px 6.3px 62.6px rgba(174, 174, 174, 0.336)",

  "& h1": {
    fontFamily: "arial",
    fontWeight: "500",
    marginBottom: "1rem",
  },
}));

const StyledForm = styled("form")(() => ({
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));
