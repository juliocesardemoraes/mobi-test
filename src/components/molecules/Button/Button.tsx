import React from "react";
import styles from "./button.module.css";
import { Button } from "@mui/material";

export default function ButtonUI({
  isDisabled = false,
  text,
  type,
  onClick = () => {},
}: {
  isDisabled?: boolean;
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: any;
}) {
  return (
    <Button
      className={`mt-2 ${styles.check__button}`}
      variant="contained"
      disabled={isDisabled}
      style={{ textTransform: "none" }}
      type={type}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
