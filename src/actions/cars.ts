import axios from "axios";
import { apiUrl } from "./config";
import { IBrands, IYears, VehicleTypes } from "@/types/fipe";

/**
 * Returns vehicle brands
 * @param {VehicleTypes} vehicleType the vehicle type
 * @returns {[IBrands]} array of brands
 */
export async function getVehicleBrands(vehicleType: VehicleTypes) {
  const response = axios
    .get(`${apiUrl}/${vehicleType}/brands`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error?.response?.status === 404) return [];

      return { error: error };
    });

  return response;
}

/**
 * Returns models for the brand
 * @param {string} vehicleType the vehicle type
 * @param {string} brandId the brand id(int)
 * @returns {[IBrands]} array of models
 */
export async function getVehicleModels(
  vehicleType: VehicleTypes,
  brandId: string
) {
  const response = axios
    .get(`${apiUrl}/${vehicleType}/brands/${brandId}/models`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error?.response?.status === 404) return [];

      return { error: error };
    });

  return response;
}

/**
 * Returns years for respective brand and modelId
 * @param {string} vehicleType the vehicle type
 * @param {string} brandId the vehicle brand
 * @param {string} modelId the model code identifier
 * @returns {[IYears]} array of years for the respective car brand and modelId
 */
export async function getYearsByModel(
  vehicleType: string,
  brandId: string,
  modelId: string
) {
  const response = axios
    .get(`${apiUrl}/${vehicleType}/brands/${brandId}/models/${modelId}/years`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error?.response?.status === 404) return [];

      return { error: error };
    });

  return response;
}
