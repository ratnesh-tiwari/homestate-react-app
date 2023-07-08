import { styled } from "@mui/material";
import theme from "../theme";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Faq from "../components/Faq";
import SearchBar from "../features/search/SearchBar";

const Header = styled("header")`
  background-image: linear-gradient(
      rgba(245, 245, 245, 0.75),
      rgba(179, 179, 179, 0.65),
      rgba(0, 64, 110, 0.5)
    ),
    url("./bg.jpg");
  background-size: cover;
  background-position: center;
  height: 100dvh;

  ${theme.breakpoints.up("sm")} {
    height: 75dvh;
  }

  ${theme.breakpoints.up("md")} {
    height: 100dvh;
  }

  /* Additional background properties if needed */
`;

function Landing() {
  return (
    <>
      <Header>
        <Navbar />
        <Box height="85%" display="flex" alignItems="center">
          <Hero />
        </Box>
      </Header>
      <SearchBar />
      <Features />
      <Faq />
      <Footer />
    </>
  );
}

export default Landing;
