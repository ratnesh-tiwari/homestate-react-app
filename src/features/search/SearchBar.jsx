import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  let [inputValue, setInputValue] = useState();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const param = inputValue.split(" ").join("-");
    navigate(`/search/${param}`);
  };

  const handleEnterKeyPress = event => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <Container
      component="section"
      aria-label="search property"
      sx={{
        marginY: "4.2rem"
      }}
    >
      <Typography
        variant="h2"
        color="primary"
        fontWeight={500}
        mb={4}
        textAlign="center"
      >
        Explore Available Properties
      </Typography>

      <Paper
        sx={{
          p: "4px 8px",
          display: "flex",
          justifyContent: "end",
          maxWidth: 900,
          marginInline: "auto"
        }}
      >
        <InputBase
          inputComponent="input"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search location (delhi, kolkata, bengaluru, lucknow, punjab)"
          inputProps={{ "aria-label": "search property" }}
          value={inputValue || ""}
          onChange={e => setInputValue(e.target.value)}
          onKeyUp={handleEnterKeyPress}
        />
        <IconButton
          onClick={handleSubmit}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}

export default SearchBar;
