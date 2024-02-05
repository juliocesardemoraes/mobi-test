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

export const VehicleMapper = {
  cars: "cars",
  motorcycles: "motorcycles",
  trucks: "trucks",
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

export interface IAxiosResponse {
  message: string;
  name: string;
  stack: string;
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: (null | ((data: any, headers?: any) => any))[];
    transformResponse: (null | ((data: any) => any))[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Record<string, any>;
    headers: Record<string, string>;
    method: string;
    url: string;
  };
  response: {
    data: {
      error?: string;
    };
  };
  code: string;
  status: number;
}
