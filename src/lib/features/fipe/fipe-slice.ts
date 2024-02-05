import { IAxiosResponse, IFipeInfo, IVehicleInfo } from "@/types/fipe";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

type InitialState = {
  brands: IVehicleInfo[] | [];
  models: IVehicleInfo[] | [];
  years: IVehicleInfo[] | [];
  fipeInfo: IFipeInfo | [];
  error: IAxiosResponse | null;
  loading: {
    brands: boolean;
    models: boolean;
    years: boolean;
  };
};

const initialState = {
  brands: [],
  models: [],
  years: [],
  fipeInfo: {},
  error: null,
  loading: {
    brands: false,
    models: false,
    years: false,
  },
} as InitialState;

const fipeSlice = createSlice({
  name: "fipe",
  initialState,
  reducers: {
    addBrands: (state, action: PayloadAction<IVehicleInfo[]>) => {
      return {
        ...state,
        brands: action.payload,
        loading: {
          ...state.loading,
          brands: false,
        },
        error: null,
      };
    },
    addModels: (state, action: PayloadAction<IVehicleInfo[] | []>) => {
      return {
        ...state,
        models: action.payload,
        loading: {
          ...state.loading,
          models: false,
        },
        error: null,
      };
    },
    addYears: (state, action: PayloadAction<IVehicleInfo[] | []>) => {
      return {
        ...state,
        years: action.payload,
        loading: {
          ...state.loading,
          years: false,
        },
        error: null,
      };
    },
    addFipeInfo: (state, action: PayloadAction<IFipeInfo>) => {
      return {
        ...state,
        fipeInfo: action.payload,
        loading: {
          brands: false,
          models: false,
          years: false,
        },
        error: null,
      };
    },
    setError: (state, action: PayloadAction<IAxiosResponse | null>) => {
      return {
        ...state,
        error: action.payload,
        loading: {
          brands: false,
          models: false,
          years: false,
        },
      };
    },
    setLoading: (
      state,
      action: PayloadAction<{
        brands: boolean;
        models: boolean;
        years: boolean;
      }>
    ) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    clearData: (state, action) => {
      return {
        brands: [],
        models: [],
        years: [],
        fipeInfo: [],
        error: null,
        loading: {
          brands: false,
          models: false,
          years: false,
        },
      };
    },
  },
});

export const {
  addBrands,
  addModels,
  addYears,
  addFipeInfo,
  setError,
  setLoading,
  clearData,
} = fipeSlice.actions;
export default fipeSlice.reducer;
