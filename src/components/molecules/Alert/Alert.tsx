"use client";
import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { IAxiosResponse } from "@/types/fipe";

export default function AlertComponent({
  message = "Mensagem padrão",
  severity = "error",
}: {
  message?: string;
  severity?: "success" | "error" | "warning" | "info";
}) {
  const [showComponent, setShowComponent] = useState(false);

  const alertMessage: IAxiosResponse | null = useSelector(
    (state: RootState) => state.fipeReducer.error
  );

  return (
    <>
      {alertMessage != null || showComponent ? (
        <Alert
          severity={severity}
          onClose={() => {
            setShowComponent(false);
          }}
        >
          {alertMessage?.response?.data?.error ?? message}
        </Alert>
      ) : null}
    </>
  );
}
