"use client";
import SelectUI from "@/components/UI/Select/Select";
import { useState } from "react";
import ButtonUI from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  const vehicleMapper = [
    { name: "carros", code: "cars" },
    { name: "motos", code: "motorcycles" },
    { name: "caminhões", code: "trucks" },
  ];

  const redirectToResult = () => {
    router.push(`/search?vehicleType=${selected}`, { scroll: false });
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-4 mt-4">
      <h1>Selecione um tipo de veiculo para pesquisar a tabela fipe</h1>
      <SelectUI
        labelName="Veículo"
        content={vehicleMapper}
        setSelected={setSelected}
        selected={selected}
      ></SelectUI>
      <ButtonUI
        isDisabled={selected == ""}
        text={"Ir para aba de pesquisa"}
        type={"button"}
        onClick={() => {
          redirectToResult();
        }}
      ></ButtonUI>
    </main>
  );
}
