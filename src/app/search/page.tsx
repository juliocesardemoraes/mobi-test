"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { getVehicleBrands, getVehicleModels } from "@/actions/cars";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { addBrands, addModels } from "@/lib/features/fipe/fipe-slice";
import SelectComponent from "@/components/UI/Select";

export default function Page() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getBrandsAsync = async () => {
      const carBrands = await getVehicleBrands("cars");
      dispatch(addBrands(carBrands));
    };
    getBrandsAsync();
  }, []);

  useEffect(() => {
    if (selectedBrand == "") return;
    const getModelsAsync = async () => {
      const carModels = await getVehicleModels("cars", selectedBrand);
      dispatch(addModels(carModels));
    };
    getModelsAsync();
  }, [selectedBrand]);

  return (
    <div className={`w-svw text-center `}>
      <h1>Tabela Fipe</h1>
      <h2>Consulte o valor de um veículo de forma gratuita</h2>
      <div
        className={`${styles.bg__box} w-1/2 mt-4 p-4 bg__box flex items-center justify-center flex-col m-auto rounded`}
      >
        <SelectComponent
          dataAcessor={"brands"}
          setSelected={setSelectedBrand}
          selected={selectedBrand}
        ></SelectComponent>
        <SelectComponent
          dataAcessor={"models"}
          setSelected={setSelectedModel}
          selected={selectedModel}
        ></SelectComponent>
        <SelectComponent
          dataAcessor={"years"}
          setSelected={setSelectedYear}
          selected={selectedYear}
        ></SelectComponent>
        <Button
          className="mt-2"
          variant="contained"
          disabled
          style={{ textTransform: "none" }}
        >
          Consultar Preço
        </Button>
      </div>
    </div>
  );
}
