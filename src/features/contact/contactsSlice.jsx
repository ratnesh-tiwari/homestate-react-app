import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || []
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    }
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

export const useContacts = () => {
  const data = useSelector(state => state.contacts.contacts);
  return data;
};
