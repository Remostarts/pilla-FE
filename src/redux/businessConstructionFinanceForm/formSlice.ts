import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessInformation: {},
  constructionDetails: {},
  constructionStageDetails: {},
  loanDetails: {},
  linkCorporateBankAccount: {},
  declaration: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateBusinessInformation: (state, action) => {
      state.businessInformation = { ...state.businessInformation, ...action.payload };
    },
    updateConstructionDetails: (state, action) => {
      state.constructionDetails = { ...state.constructionDetails, ...action.payload };
    },
    updateConstructionStageDetails: (state, action) => {
      state.constructionStageDetails = { ...state.constructionStageDetails, ...action.payload };
    },
    updateLoanDetails: (state, action) => {
      state.loanDetails = { ...state.loanDetails, ...action.payload };
    },
    updateLinkCorporateBankAccount: (state, action) => {
      state.linkCorporateBankAccount = { ...state.linkCorporateBankAccount, ...action.payload };
    },
    updateDeclaration: (state, action) => {
      state.declaration = { ...state.declaration, ...action.payload };
    },
  },
});

export const {
  updateBusinessInformation,
  updateConstructionDetails,
  updateConstructionStageDetails,
  updateLoanDetails,
  updateLinkCorporateBankAccount,
  updateDeclaration,
} = formSlice.actions;

export default formSlice.reducer;
