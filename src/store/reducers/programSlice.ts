  import { createSlice } from "@reduxjs/toolkit";

export type tokenState = {
  incomeList: any[];
  supplyList: any[];
  salaryList: any[]; 
  programList: any[]; 
  singleProgram: any; 
};

const initialState: tokenState = {
  incomeList: [],
  supplyList: [],
  salaryList: [],
  programList: [],
  singleProgram: null,
};

export const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {  
    storeProgramList: (state, action) => {
      state.programList = action.payload;
    },
    storeSingleProgram: (state, action) => {
      state.singleProgram = action.payload;
    },
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
  storeIncomeList,storeSupplyList,storeSalaryList, storeProgramList,storeSingleProgram
} = programSlice.actions;

export default programSlice.reducer;
