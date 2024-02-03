import { IFipeInfo, IVehicleInfo } from "@/types/fipe";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  brands: IVehicleInfo[] | [];
  models: IVehicleInfo[] | [];
  years: IVehicleInfo[] | [];
  fipeInfo: IFipeInfo | [];
};

const initialState = {
  brands: [],
  models: [],
  years: [],
  fipeInfo: {},
} as InitialState;

const fipeSlice = createSlice({
  name: "fipe",
  initialState,
  reducers: {
    addBrands: (state, action: PayloadAction<[IVehicleInfo]>) => {
      return {
        ...state,
        brands: action.payload,
      };
    },
    addModels: (state, action: PayloadAction<[IVehicleInfo]>) => {
      return {
        ...state,
        models: action.payload,
      };
    },
    addYears: (state, action: PayloadAction<[IVehicleInfo]>) => {
      return {
        ...state,
        years: action.payload,
      };
    },
    addFipeInfo: (state, action: PayloadAction<IFipeInfo>) => {
      return {
        ...state,
        fipeInfo: action.payload,
      };
    },
  },
});

export const { addBrands, addModels, addYears, addFipeInfo } =
  fipeSlice.actions;
export default fipeSlice.reducer;
