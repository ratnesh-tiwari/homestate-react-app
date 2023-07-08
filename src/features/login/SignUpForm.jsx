import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Container from "@mui/material/Container";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../utils/helper";

const SignUpForm = ({ ButtonSiwtch, handleLoginForm, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { signin } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();

    // Validate form data
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
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      // Handle signup logic here
      const user = await signin(email, password);
      if (user) navigate("/search");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container role="sign up page">
      <Typography variant="h3" gutterBottom>
        Signup
      </Typography>

      <form onSubmit={handleSubmit} role="signup form">
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
          error={!!errors.password}
          helperText={errors.password}
        />

        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />

        <Box display="flex" gap={2} mt={1}>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
          <ButtonSiwtch handleLoginForm={handleLoginForm} login={login} />
        </Box>
      </form>
    </Container>
  );
};

export default SignUpForm;
