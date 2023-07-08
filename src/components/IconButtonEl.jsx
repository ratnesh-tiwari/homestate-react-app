import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import {
  addProperty,
  deleteProperty,
  useSaved
} from "../features/savedProperty/savedSlice";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { findBookmark } from "../utils/helper";
import theme from "../theme";

function IconButtonEl({ data }) {
  const dispatch = useDispatch();
  const savedData = useSaved();

  const isBookmarked = findBookmark(savedData, data.id);

  const handlerClick = () => {
    if (isBookmarked) {
      dispatch(deleteProperty(data.id));
    } else if (!isBookmarked) {
      dispatch(addProperty(data));
    }
  };

  return (
    <IconButton
      onClick={handlerClick}
      sx={{ position: "absolute", top: "8%", right: "2%" }}
      aria-label="bookmark buttom"
    >
      <BookmarksIcon
        sx={{ color: isBookmarked ? theme.palette.accent.main : "#fff" }}
      />
    </IconButton>
  );
}

export default IconButtonEl;
