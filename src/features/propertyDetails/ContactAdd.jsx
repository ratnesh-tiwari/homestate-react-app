import Button from "@mui/material/Button";
import {
  addContact,
  deleteContact,
  useContacts
} from "../contact/contactsSlice";
import { findBookmark } from "../../utils/helper";
import { useDispatch } from "react-redux";

function ContactAdd({ owner }) {
  const savedContacts = useContacts();
  const dispatch = useDispatch();

  const isAddedToList = findBookmark(savedContacts, owner.id);
  const handleAddContact = () => {
    if (isAddedToList) {
      dispatch(deleteContact(owner.id));
    } else if (!isAddedToList) {
      dispatch(addContact(owner));
    }
  };

  return (
    <Button
      onClick={handleAddContact}
      variant="contained"
      sx={{ marginTop: "16px" }}
    >
      {isAddedToList ? "Remov from your contact" : "Add owner to your contanct"}
    </Button>
  );
}

export default ContactAdd;
