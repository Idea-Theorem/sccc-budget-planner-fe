import { createSlice } from "@reduxjs/toolkit";

export type tokenState = {
  incomeList: any[];
  supplyList: any[];
  salaryList: any[];
  singleDepart: any[];
  programList: any[];
  programBudgetInDepartment: any;
  singleProgram: any;
  singleDepartName: any;
  programFromStatus: any;
  sidebarCheck: any;
};

const initialState: tokenState = {
  incomeList: [],
  supplyList: [],
  singleDepart: [],
  salaryList: [],
  programList: [],
  singleProgram: null,
  singleDepartName: null,
  programFromStatus: null,
  programBudgetInDepartment: "",
  sidebarCheck: "",
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
    storeSingleDepart: (state, action) => {
      state.singleDepart = action.payload;
    },
    storeSingleDepartName: (state, action) => {
      state.singleDepartName = action.payload;
    },
    storeProgramBudgetInDepartment: (state, action) => {
      state.programBudgetInDepartment = action.payload;
    },
    storeSideBarCheck: (state, action) => {
      state.sidebarCheck = action.payload;
    },
  },
});

export const {
  storeIncomeList,
  storeSideBarCheck,
  storeSupplyList,
  storeProgramBudgetInDepartment,
  storeSalaryList,
  storeProgramList,
  storeSingleProgram,
  storeProgramFromStatus,
  storeSingleDepart,
  storeSingleDepartName,
} = programSlice.actions;

export default programSlice.reducer;
