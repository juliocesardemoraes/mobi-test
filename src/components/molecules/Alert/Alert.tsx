"use client";
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { IAxiosResponse } from "@/types/fipe";

export default function AlertComponent() {
  const [showComponent, setShowComponent] = useState(false);

  const alertMessage: IAxiosResponse | null = useSelector(
    (state: RootState) => state.fipeReducer.error
  );

  return (
    <>
      {alertMessage != null || showComponent ? (
        <Alert
          severity="error"
          onClose={() => {
            setShowComponent(false);
          }}
        >
          {alertMessage?.response?.data?.error}
        </Alert>
      ) : null}
    </>
  );
}
