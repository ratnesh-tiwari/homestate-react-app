import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../utils/helper";

function LoginForm({ ButtonSiwtch, handleLoginForm, login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login: loginFormSubmit } = useAuth();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "Please enter your email";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!password) {
      validationErrors.password = "Please enter a password";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      // Handle signup logic here
      const user = await loginFormSubmit(email, password);
      if (user) navigate("/search");
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Login
      </Typography>

      <form onSubmit={handleSubmit} role="login form">
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
          required
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password}
          required
        />
        <Box display="flex" gap={2} mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <ButtonSiwtch handleLoginForm={handleLoginForm} login={login} />
        </Box>
      </form>
    </Container>
  );
}

export default LoginForm;
