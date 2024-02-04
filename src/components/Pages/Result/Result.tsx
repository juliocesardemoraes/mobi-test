import { getFipeEvaluation } from "@/actions/cars";
import { IFipeInfo, VehicleTypes } from "@/types/fipe";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./result.module.css";
import ResultLoading from "./Resultloading";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const [carInfo, setCarInfo] = useState<IFipeInfo | null>(null);

  const getBrandsAsync = async (
    typeOfVehicle: VehicleTypes,
    selectedBrand: string,
    selectedModel: string,
    selectedYear: string
  ) => {
    const carInfo = await getFipeEvaluation(
      typeOfVehicle,
      selectedBrand,
      selectedModel,
      selectedYear
    );
    setCarInfo(carInfo);
  };

  useEffect(() => {
    const typeOfVehicle = searchParams.get("typeOfVehicle");
    const selectedBrand = searchParams.get("selectedBrand");
    const selectedModel = searchParams.get("selectedModel");
    const selectedYear = searchParams.get("selectedYear");

    if (!typeOfVehicle || !selectedBrand || !selectedModel || !selectedYear)
      return;

    if (
      typeOfVehicle == "cars" ||
      typeOfVehicle == "motorcycles" ||
      typeOfVehicle == "trucks"
    )
      getBrandsAsync(typeOfVehicle, selectedBrand, selectedModel, selectedYear);
  }, [searchParams]);

  return (
    <div className="text-center w-svw ">
      {carInfo !== null ? (
        <div
          className={`w-100 flex flex-col ${styles.container} items-center gap-4 p-4`}
        >
          <h1>
            Tabela Fipe: Preço {carInfo?.brand} {carInfo?.modelYear}
          </h1>
          <div className={`${styles.container__price}`}>{carInfo.price}</div>
          <span>Este é o preço de compra do veiculo</span>
        </div>
      ) : (
        <ResultLoading></ResultLoading>
      )}
    </div>
  );
}
