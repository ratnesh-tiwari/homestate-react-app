import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import theme from "../theme";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Container>
        <Box ml={{ xs: 1, sm: 2, md: 4 }}>
          <motion.div variants={textVariant(1.1)}>
            <Typography
              variant="h1"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, hsla(205, 38%, 26%, 1) 0%, hsla(205, 100%, 31%, 1) 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "500"
              }}
              mb={2}
            >
              Find Your Place in the World
            </Typography>
          </motion.div>
          <motion.div variants={textVariant(1.2)}>
            <Typography
              variant="h3"
              color={`${theme.palette.primary.dark}`}
              mb={1.5}
              sx={{ fontWeight: "500" }}
            >
              Discover a World of Possibilities with Our Extensive Property
              Listings
            </Typography>
          </motion.div>
          <motion.div variants={textVariant(1.3)}>
            <Button
              variant="contained"
              color="accent"
              size="large"
              sx={{ fontWeight: "600" }}
            >
              <Link href="/search" underline="none">
                Start Your Journey
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            <Box
              display="flex"
              alignItems={{ xs: "start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
              gap={{ xs: 1, sm: 3 }}
              mt={2}
            >
              <Box display="flex">
                <Avatar
                  alt="Customer"
                  src="./avatar/c1.jpg"
                  sx={{
                    border: `2px solid ${theme.palette.accent.light}`,
                    width: "52px",
                    height: "52px",
                    marginRight: "-16px"
                  }}
                />
                <Avatar
                  alt="Customer"
                  src="./avatar/c2.jpg"
                  sx={{
                    border: `2px solid ${theme.palette.accent.light}`,
                    width: "52px",
                    height: "52px",
                    marginRight: "-16px"
                  }}
                />
                <Avatar
                  alt="Customer"
                  src="./avatar/c3.jpg"
                  sx={{
                    border: `2px solid ${theme.palette.accent.light}`,
                    width: "52px",
                    height: "52px",
                    marginRight: "-16px"
                  }}
                />
                <Avatar
                  alt="Customer"
                  src="./avatar/c4.jpg"
                  sx={{
                    border: `2px solid ${theme.palette.accent.light}`,
                    width: "52px",
                    height: "52px",
                    marginRight: "-16px"
                  }}
                />
                <Avatar
                  alt="Customer"
                  src="./avatar/c5.jpg"
                  sx={{
                    border: `2px solid ${theme.palette.accent.light}`,
                    width: "52px",
                    height: "52px",
                    marginRight: "-16px"
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                color={`${theme.palette.accent.light}`}
                sx={{ fontWeight: "700" }}
              >
                1000+ Happy customers
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </motion.div>
  );
}

export default Hero;
