export interface IVehicleInfo {
  name: string;
  code: string;
}

export type VehicleTypes = "cars" | "motorcycles" | "trucks";
export type RequestTypes = "brands" | "models" | "years";

export const RequestsMapper: any = {
  brands: "Marcas",
  models: "Modelos",
  years: "Anos",
};

export interface IFipeInfo {
  price: string;
  brand: string;
  model: string;
  modelYear: number;
  fuel: string;
  codeFipe: string;
  referenceMonth: string;
  vehicleType: number;
  fuelAcronym: string;
}
