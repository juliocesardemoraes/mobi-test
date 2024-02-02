import { IVehicleInfo, RequestsMapper } from "@/types/fipe";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import React, { Dispatch } from "react";

export default function SelectUI({
  dataAcessor,
  content,
  setSelected,
  selected,
}: {
  dataAcessor: string;
  content: IVehicleInfo[] | [];
  setSelected: Dispatch<string>;
  selected: string;
}) {
  return (
    <FormControl className="w-10/12 mt-4 ">
      {content?.length > 0 ? (
        <>
          <InputLabel id={`${dataAcessor}-label`}>
            {RequestsMapper?.[dataAcessor] ?? dataAcessor}
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
            {content.map((contentItem: IVehicleInfo) => {
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
