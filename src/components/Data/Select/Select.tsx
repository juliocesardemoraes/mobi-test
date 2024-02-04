import { useAppSelector } from "@/lib/store";
import { RequestTypes, RequestsMapper } from "@/types/fipe";
import React, { Dispatch } from "react";
import SelectUI from "../../UI/Select/Select";

export default function SelectData({
  dataAcessor,
  setSelected,
  selected,
}: {
  dataAcessor: RequestTypes;
  setSelected: Dispatch<string>;
  selected: string;
}) {
  const content = useAppSelector((state) => state.fipeReducer[dataAcessor]);

  return (
    <SelectUI
      labelName={RequestsMapper?.[dataAcessor]}
      content={content}
      setSelected={setSelected}
      selected={selected}
    ></SelectUI>
  );
}
