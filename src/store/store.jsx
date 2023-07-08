import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contactsSlice";
import savedReducer from "../features/savedProperty/savedSlice";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    saved: savedReducer
  }
});

export default store;
