export interface IBrands {
  name: string;
  code: string;
}

export interface IModels {
  name: string;
  code: string;
}

export interface IYears {
  name: string;
  code: string;
}

export type VehicleTypes = "cars" | "motorcycles" | "trucks";
export type RequestTypes = "brands" | "models" | "years";

export enum RequestsMapper {
  brands = "Marcas",
  models = "Modelos",
  years = "Anos",
}
