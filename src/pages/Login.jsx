import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { lazy, useState } from "react";
import { Button } from "@mui/material";

const LoginForm = lazy(() => import("../features/login/LoginForm"));
const SignUpForm = lazy(() => import("../features/login/SignUpForm"));

const Div = styled("div")`
  background-image: linear-gradient(
      rgba(245, 245, 245, 0.75),
      rgba(179, 179, 179, 0.65),
      rgba(0, 64, 110, 0.5)
    ),
    url("./bg.jpg");
  background-size: cover;
  background-position: center;
  height: 100dvh;

  /* Additional background properties if needed */
`;

function Login() {
  const [login, setLogin] = useState(true);
  const handleLoginForm = () => {
    setLogin(prev => !prev);
  };

  return (
    <Div role="login signup page">
      <Navbar />
      <Box
        height="90%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          sx={{
            maxWidth: 620,
            paddingY: "32px",
            paddingX: "16px"
          }}
        >
          {login && (
            <LoginForm
              ButtonSiwtch={ButtonSiwtch}
              handleLoginForm={handleLoginForm}
              login={login}
            />
          )}
          {!login && (
            <SignUpForm
              ButtonSiwtch={ButtonSiwtch}
              handleLoginForm={handleLoginForm}
              login={login}
            />
          )}
        </Paper>
      </Box>
    </Div>
  );
}

export default Login;

const ButtonSiwtch = ({ handleLoginForm, login }) => {
  return (
    <Button onClick={handleLoginForm}>{login ? "signup" : "login"}</Button>
  );
};
