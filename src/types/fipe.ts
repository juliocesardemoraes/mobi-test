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
