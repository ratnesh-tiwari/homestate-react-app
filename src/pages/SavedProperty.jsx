import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSaved } from "../features/savedProperty/savedSlice";
import Error from "../components/Error";
import { Container, Grid } from "@mui/material";
import SearchCard from "../features/search/SearchCard";

function SavedProperty() {
  const savedData = useSaved();

  return (
    <>
      <Navbar />
      <Container sx={{ marginY: "42px" }}>
        {savedData.length === 0 ? (
          <Error content="Unable to find saved property details" />
        ) : (
          <Grid container spacing={{ xs: 2, sm: 1, md: 2, lg: 4 }}>
            {savedData.map(el => (
              <SearchCard key={el.id} {...el} />
            ))}
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default SavedProperty;
