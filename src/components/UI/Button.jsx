import { Button as ButtonMUI, styled } from "@mui/material";

const Button = ({ children, onClick, ...rest }) => (
  <StyledButton type="submit" variant="contained" onClick={onClick} {...rest}>
    {children}
  </StyledButton>
);

export default Button;

const StyledButton = styled(ButtonMUI)(() => ({
  width: "20rem",
  height: "56px",
}));
