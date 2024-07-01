import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const setLocal = (state) => {
  localStorage.setItem("todoRedux", JSON.stringify(state.todos));
};

const initialState = {
  todos: JSON.parse(localStorage.getItem("todoRedux")),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const createdAt = new Date().toISOString();
      const updatedAt = new Date().toISOString();
      const result = { id: uuidv4(), text: action.payload.text, checked: false, createdAt, updatedAt };
      state.todos.push(result);
      setLocal(state);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
