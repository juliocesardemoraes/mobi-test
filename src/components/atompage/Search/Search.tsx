"use client";
import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import {
  clearVehicleModels,
  clearVehicleYears,
  getVehicleBrands,
  getVehicleModels,
  getVehicleYears,
} from "@/actions/cars";
import SelectData from "@/components/organisms/SelectData/SelectData";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ButtonUI from "@/components/molecules/Button/Button";
import { VehicleMapper, VehicleTypes } from "@/types/fipe";
import { useDispatch } from "react-redux";
import { clearData } from "@/lib/features/fipe/fipe-slice";

export default function SearchPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [typeOfVehicle, setTypeOfVehicle] = useState<VehicleTypes | "">("");

  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const clearVehicleModelsAsync = async () => {
      await clearVehicleModels();
    };
    clearVehicleModelsAsync();
  }, []);

  useEffect(() => {
    const vehicleType: any = searchParams.get("vehicleType");

    setTypeOfVehicle(vehicleType);
  }, [searchParams]);

  useEffect(() => {
    if (typeOfVehicle == "") return;

    const getBrandsAsync = async () => {
      await getVehicleBrands(typeOfVehicle);
      const vehicleType: any = searchParams.get("vehicleType");
      if (vehicleType == null) router.push("/");
      if (!VehicleMapper.hasOwnProperty(vehicleType)) router.push("/");
    };

    getBrandsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfVehicle]);

  useEffect(() => {
    if (selectedBrand == "" && selectedModel == "" && selectedYear == "")
      return;

    if (selectedBrand == "") return;

    setSelectedModel("");
    clearVehicleModels();

    const getModelsAsync = async () => {
      if (
        typeOfVehicle == "cars" ||
        typeOfVehicle == "motorcycles" ||
        typeOfVehicle == "trucks"
      )
        await getVehicleModels(typeOfVehicle, selectedBrand);
    };

    getModelsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand == "" && selectedModel == "" && selectedYear == "")
      return;

    if (selectedModel == "") return;

    setSelectedYear("");
    clearVehicleYears();

    const getYearsAsync = async () => {
      if (
        typeOfVehicle == "cars" ||
        typeOfVehicle == "motorcycles" ||
        typeOfVehicle == "trucks"
      )
        await getVehicleYears(typeOfVehicle, selectedBrand, selectedModel);
    };

    getYearsAsync();

    // selectedModel will be triggered by selectedBrand, so
    // if the brand is changed selected model will be as well.
    // which will in it's case trigger this, so we don't need
    // selectedBrand for this array of dependencies

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModel]);

  const redirectToResult = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(clearData([]));
    router.push(
      `/result?typeOfVehicle=${typeOfVehicle}&selectedBrand=${selectedBrand}&selectedModel=${selectedModel}&selectedYear=${selectedYear}`,
      { scroll: false }
    );
  };

  return (
    <div className={`w-svw text-center`}>
      <h1>Tabela Fipe</h1>
      <h2>Consulte o valor de um veículo de forma gratuita</h2>
      <form
        className={`${styles.bg__box} w-1/2 mt-4 p-4 bg__box flex items-center justify-center flex-col m-auto rounded`}
        onSubmit={(event) => {
          redirectToResult(event);
        }}
      >
        <SelectData
          dataAcessor={"brands"}
          setSelected={setSelectedBrand}
          selected={selectedBrand}
        ></SelectData>
        <SelectData
          dataAcessor={"models"}
          setSelected={setSelectedModel}
          selected={selectedModel}
        ></SelectData>
        {selectedBrand !== "" && selectedModel !== "" ? (
          <>
            <SelectData
              dataAcessor={"years"}
              setSelected={setSelectedYear}
              selected={selectedYear}
            ></SelectData>
          </>
        ) : null}
        <ButtonUI
          isDisabled={
            selectedBrand !== "" && selectedModel !== "" && selectedYear !== ""
              ? false
              : true
          }
          text={"Consultar Preço"}
          type={"submit"}
        ></ButtonUI>
      </form>
    </div>
  );
}
