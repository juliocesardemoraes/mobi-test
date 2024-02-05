import { IVehicleInfo } from "@/types/fipe";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import React, { Dispatch } from "react";

export default function SelectUI({
  labelName,
  content,
  setSelected,
  selected,
  loading = false,
}: {
  labelName: string;
  content: IVehicleInfo[] | [];
  setSelected: Dispatch<string>;
  selected: string;
  loading?: boolean;
}) {
  return (
    <FormControl className="w-10/12 mt-4 ">
      {loading === false ? (
        <>
          <InputLabel id={`${labelName}-label`} data-testid="label-jest-test">
            {labelName}
          </InputLabel>
          <Select
            className="gap-4"
            labelId={`${labelName}-label`}
            id={`${labelName}-select`}
            data-testid={`select-jest-test`}
            value={selected}
            label={labelName}
            onChange={(event: any) => {
              setSelected(event?.target?.value);
            }}
          >
            {content.map((contentItem: IVehicleInfo) => {
              return (
                <MenuItem
                  value={contentItem.code}
                  data-testid={`label-name-${contentItem.code}`}
                  key={contentItem.code}
                >
                  {contentItem.name}
                </MenuItem>
              );
            })}
          </Select>
        </>
      ) : (
        <Skeleton
          className={"rounded"}
          variant="rectangular"
          data-testid="skeleton-test"
          height={60}
        />
      )}
    </FormControl>
  );
}
