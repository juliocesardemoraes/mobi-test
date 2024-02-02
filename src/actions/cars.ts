import axios from "axios";
import { apiUrl } from "./config";
import { VehicleTypes, IVehicleInfo } from "@/types/fipe";
import { store } from "@/lib/store";
import { addBrands, addModels, addYears } from "@/lib/features/fipe/fipe-slice";

/**
 * Returns vehicle brands
 * @param {VehicleTypes} vehicleType the vehicle type
 * @returns {IVehicleInfo[]} array of brands
 */
export async function getVehicleBrands(vehicleType: VehicleTypes) {
  axios
    .get(`${apiUrl}/${vehicleType}/brands`)
    .then((res) => {
      store.dispatch(addBrands(res.data));
    })
    .catch((error) => {});
}

/**
 * Returns models for the brand
 * @param {string} vehicleType the vehicle type
 * @param {string} brandId the brand id(int)
 * @returns {IVehicleInfo[]} array of models
 */
export async function getVehicleModels(
  vehicleType: VehicleTypes,
  brandId: string
) {
  axios
    .get(`${apiUrl}/${vehicleType}/brands/${brandId}/models`)
    .then((res) => {
      store.dispatch(addModels(res.data));
    })
    .catch((error) => {});
}

/**
 * Returns years for respective brand and modelId
 * @param {string} vehicleType the vehicle type
 * @param {string} brandId the vehicle brand
 * @param {string} modelId the model code identifier
 * @returns {IVehicleInfo[]} array of years for the respective car brand and modelId
 */
export async function getYearsByModel(
  vehicleType: string,
  brandId: string,
  modelId: string
) {
  axios
    .get(`${apiUrl}/${vehicleType}/brands/${brandId}/models/${modelId}/years`)
    .then((res) => {
      store.dispatch(addYears(res.data));
    })
    .catch((error) => {});
}
