import { Skeleton } from "@mui/material";
import React from "react";
import styles from "./result.module.css";

export default function ResultLoading() {
  return (
    <div
      className={`w-100 flex flex-col ${styles.container} items-center gap-4 p-4`}
    >
      <Skeleton
        data-testid="skeleton-1"
        className={"rounded"}
        variant="rectangular"
        width={"526px"}
        height={48}
      />
      <Skeleton
        data-testid="skeleton-2"
        className={"rounded"}
        variant="rectangular"
        width={"150px"}
        height={48}
      />
      <Skeleton
        data-testid="skeleton-3"
        className={"rounded"}
        variant="rectangular"
        width={"180px"}
        height={24}
      />
    </div>
  );
}
