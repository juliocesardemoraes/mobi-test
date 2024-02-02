import { useAppSelector } from "@/lib/store";
import { IBrands, RequestTypes, RequestsMapper } from "@/types/fipe";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SelectComponent({
  dataAcessor,
  setSelected,
  selected,
}: {
  dataAcessor: RequestTypes;
  setSelected: any;
  selected: string;
}) {
  const content = useAppSelector((state) => state.fipeReducer[dataAcessor]);

  return (
    <FormControl className="w-10/12 mt-4 ">
      {content?.length > 0 ? (
        <>
          <InputLabel id={`${dataAcessor}-label`}>
            {RequestsMapper?.[dataAcessor]}
          </InputLabel>
          <Select
            labelId={`${dataAcessor}-label`}
            id={`${dataAcessor}-select`}
            value={selected}
            label={dataAcessor}
            onChange={(event: any) => {
              setSelected(event?.target?.value);
            }}
          >
            {content.map((contentItem: any) => {
              return (
                <MenuItem key={contentItem.code} value={contentItem.code}>
                  {contentItem.name}
                </MenuItem>
              );
            })}
          </Select>
        </>
      ) : (
        <Skeleton className={"rounded"} variant="rectangular" height={60} />
      )}
    </FormControl>
  );
}
