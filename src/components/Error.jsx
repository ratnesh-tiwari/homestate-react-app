import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Error({
  content = "Could Not found the details.",
  back = -1,
  btn = "go back"
}) {
  const navigate = useNavigate();
  return (
    <Container sx={{ height: "calc(100vh - 324px)" }}>
      <Box
        display="flex"
        height="100%"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
      >
        <Typography variant="body" fontSize={18} mb={2}>
          {content}
        </Typography>
        {back && (
          <Button variant="contained" onClick={() => navigate(back)}>
            {btn}
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default Error;
