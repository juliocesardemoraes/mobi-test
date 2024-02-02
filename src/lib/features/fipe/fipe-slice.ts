import { IBrands } from "@/types/fipe";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  brands: [IBrands] | [];
  models: any;
};

const initialState = { brands: [], models: [] } as InitialState;

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
    addModels: (state, action: PayloadAction<[any]>) => {
      return {
        ...state,
        models: action.payload,
      };
    },
  },
});

export const { addBrands, addModels } = fipeSlice.actions;
export default fipeSlice.reducer;
