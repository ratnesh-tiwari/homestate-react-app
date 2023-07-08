import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import theme from "../theme";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

export default function Footer() {
  return (
    <motion.footer variants={navVariants} initial="hidden" whileInView="show">
      <Box
        sx={{
          backgroundColor: `${theme.palette.neutral.main}`,
          p: 6,
          color: `${theme.palette.primary.main}`
        }}
        display="flex"
        flexDirection="column"
        gap={{ xs: 2, sm: 3 }}
        justifyContent="center"
      >
        <Box
          component="img"
          src="/logo.svg"
          alt="logo"
          height={{ xs: "36px", sm: "48px" }}
        />
        <Box
          display="flex"
          flexWrap="wrap"
          gap={{ xs: 1, sm: 4, md: 6 }}
          justifyContent="center"
          alignItems="center"
          fontSize={{ xs: "16px", sm: "20px" }}
          fontFamily="Open sans"
          mb={{ md: 2 }}
        >
          <Link href="/" underline="none">
            Home
          </Link>
          <Link href="/search" underline="none">
            Search
          </Link>
          <Link underline="none">About</Link>
          <Link underline="none">Career</Link>
          <Link underline="none">Contact Us</Link>
        </Box>
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/" underline="none">
              HOMESTATE
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </motion.footer>
  );
}
