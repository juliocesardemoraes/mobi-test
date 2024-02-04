import { IFipeInfo } from "./../types/fipe";
import axios from "axios";
import { apiUrl } from "./config";
import { VehicleTypes } from "@/types/fipe";
import { store } from "@/lib/store";
import { addBrands, addModels, addYears } from "@/lib/features/fipe/fipe-slice";

/**
 * Returns vehicle brands
 * @param {VehicleTypes} vehicleType the vehicle type
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
 * Remove models from redux
 */
export async function clearVehicleModels() {
  store.dispatch(addModels([]));
}

/**
 * Returns years for respective brand and modelId
 * @param {string} vehicleType the vehicle type
 * @param {string} brandId the vehicle brand
 * @param {string} modelId the model code identifier
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

/**
 * Remove models from redux
 */
export async function clearVehicleYears() {
  store.dispatch(addYears([]));
}

/**
 * Returns the Fipe information for the vehicle (price estimation)
 * @param {string} vehicleType the vehicle type
 * @param {string} brandId the vehicle brand
 * @param {string} modelId the model code identifier
 * @param {string} yearId the year code identifier
 * @returns {IFipeInfo} Returns information regarding vehicle type brand model and year
 */
export async function getFipeEvaluation(
  vehicleType: string,
  brandId: string,
  modelId: string,
  yearId: string
): Promise<IFipeInfo> {
  const response = axios
    .get(
      `${apiUrl}/${vehicleType}/brands/${brandId}/models/${modelId}/years/${yearId}`
    )
    .then((res: { data: IFipeInfo }) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
}
