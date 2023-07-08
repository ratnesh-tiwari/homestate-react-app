import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import Error from "../../components/Error";

function SearchResult() {
  const { query } = useParams();
  const searchData =
    data?.[Object.keys(data)?.filter(el => checkThreeCharMatch(query, el))];

  return (
    <>
      <Container>
        {!searchData && <Error />}
        <Grid container spacing={{ xs: 2, sm: 1, md: 2, lg: 4 }} mb={4}>
          {searchData &&
            searchData.map(item => (
              <SearchCard
                key={item.property_id}
                title={item.title}
                price={item.price}
                location={item.location}
                description={item.description}
                image_url={item.image_url}
                id={item.property_id}
              />
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default SearchResult;

function checkThreeCharMatch(string1, string2) {
  // Convert both strings to lowercase for case-insensitive matching
  const lowerString1 = string1.toLowerCase();
  const lowerString2 = string2.toLowerCase();

  // Iterate through each character in string1
  for (let i = 0; i <= lowerString1.length - 4; i++) {
    const substring = lowerString1.substring(i, i + 3);

    // Check if the substring is present in string2
    if (lowerString2.includes(substring)) {
      return true;
    }
  }

  // No match found
  return false;
}
