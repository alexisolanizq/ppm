import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  list: [],
  employee: null,
  id: null,
};

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.list = action.payload;
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    addEmployee: (state, action) => {
      state.list = [action.payload, ...state.list]
    },
    setIdEmployee: (state, action) => {
      state.id = action.payload
    },
    updateEmployee: (state, action) => {
      state.list = updateRow(state.list, action.payload, 'empId')
    }
  }
});

export const { addEmployee, updateEmployee, setEmployees, setEmployee, setIdEmployee } =
  employeeSlice.actions;


export default employeeSlice.reducer;
