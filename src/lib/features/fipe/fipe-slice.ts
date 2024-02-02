import { IBrands, IModels, IYears } from "@/types/fipe";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  brands: [IBrands] | [];
  models: [IModels] | [];
  years: [IYears] | [];
};

const initialState = { brands: [], models: [], years: [] } as InitialState;

const fipeSlice = createSlice({
  name: "fipe",
  initialState,
  reducers: {
    addBrands: (state, action: PayloadAction<[IBrands]>) => {
      return {
        ...state,
        brands: action.payload,
      };
    },
    addModels: (state, action: PayloadAction<[IModels]>) => {
      return {
        ...state,
        models: action.payload,
      };
    },
    addYears: (state, action: PayloadAction<[IYears]>) => {
      return {
        ...state,
        years: action.payload,
      };
    },
  },
});

export const { addBrands, addModels, addYears } = fipeSlice.actions;
export default fipeSlice.reducer;
