  import { createSlice } from "@reduxjs/toolkit";

export type tokenState = {
  incomeList: any[];
  supplyList: any[];
  salaryList: any[];
};

const initialState: tokenState = {
  incomeList: [],
  supplyList: [],
  salaryList: [],
};

export const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {  
    storeIncomeList: (state, action) => {
      state.incomeList = action.payload;
    },
    storeSupplyList: (state, action) => {
      state.supplyList = action.payload;
    },
    storeSalaryList: (state, action) => {
      state.salaryList = action.payload;
    },
  },
});

export const {
  storeIncomeList,storeSupplyList,storeSalaryList
} = programSlice.actions;

export default programSlice.reducer;
