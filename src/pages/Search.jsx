import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBar from "../features/search/SearchBar";

function Search() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Outlet />
    </>
  );
}

export default Search;
