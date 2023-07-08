import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  saved: JSON.parse(localStorage.getItem("savedProperty")) || []
};

const savedSlice = createSlice({
  name: "savedProperty",
  initialState,
  reducers: {
    addProperty(state, action) {
      state.saved.push(action.payload);
      localStorage.setItem("savedProperty", JSON.stringify(state.saved));
    },
    deleteProperty(state, action) {
      state.saved = state.saved.filter(el => el.id !== action.payload);
      localStorage.setItem("savedProperty", JSON.stringify(state.saved));
    }
  }
});

export const { addProperty, deleteProperty } = savedSlice.actions;

export default savedSlice.reducer;

export const useSaved = () => {
  const data = useSelector(state => state.saved.saved);
  return data;
};
