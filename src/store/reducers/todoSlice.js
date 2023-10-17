import {createSlice} from '@reduxjs/toolkit';

//Initial state -->
const initialState = {
  todoList: [],
  isVisible: false,
};

const todoSlice = createSlice({
  name: 'brandDetails',
  initialState: initialState,
  reducers: {
    todoAddAction: (state, action) => {
      return {...state, todoList: [...state?.todoList, action.payload]};
    },
    todoUpdateAction: (state, action) => {
      return {...state, todoList: [...state?.todoList, action.payload]};
    },
    todoRemoveAction: (state, action) => {
      const result = state?.todoList.filter(
        (item, index) => index !== action.payload?.index,
      );
      return {...state, todoList: result};
    },
    modalVisibleAction: (state, action) => {
      return {...state, isVisible: action.payload};
    },
    completeTodoAction:(state, action) => {
      const { index } = action.payload;

      const updatedTodoList = [...state.todoList];
      
      updatedTodoList.splice(index, 1,action.payload?.update);
      
      return { ...state, todoList: updatedTodoList };
    },
  },
  extraReducers: builder => {},
});

export const {
  todoAddAction,
  todoUpdateAction,
  todoRemoveAction,
  modalVisibleAction,
  completeTodoAction
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
