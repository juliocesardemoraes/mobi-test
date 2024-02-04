export type RequestTypes = "brands" | "models" | "years";
export type VehicleTypes = "cars" | "motorcycles" | "trucks";

export interface IVehicleInfo {
  name: string;
  code: string;
}

export interface IVehiclesMapper {
  name: VehicleTypes;
  code: string;
}

export const RequestsMapper = {
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
