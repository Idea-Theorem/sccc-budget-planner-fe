  import { createSlice } from "@reduxjs/toolkit";

export type tokenState = {
  incomeList: any[];
  supplyList: any[];
  salaryList: any[];
  programList: any[];

  singleProgram: any; 
  programFromStatus: any; 
};

const initialState: tokenState = {
  incomeList: [],
  supplyList: [],
  salaryList: [],
  programList: [],
  singleProgram: null,
  programFromStatus: null,
};

export const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {  
    storeSingleProgram: (state, action) => {
      state.singleProgram = action.payload;
    },
    storeProgramFromStatus: (state, action) => {
      state.programFromStatus = action.payload;
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
    storeProgramList: (state, action) => {
      state.programList = action.payload;
    },
  },
});

export const {
  storeIncomeList,storeSupplyList,storeSalaryList, storeProgramList,storeSingleProgram, storeProgramFromStatus
} = programSlice.actions;

export default programSlice.reducer;
