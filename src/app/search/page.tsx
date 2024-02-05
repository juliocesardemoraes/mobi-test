"use client";
import SearchPage from "@/components/pages/Search/Search";
import React, { Suspense, useEffect, useState } from "react";

export default function Search() {
  return (
    <Suspense fallback={"Loading.."}>
      <SearchPage></SearchPage>
    </Suspense>
  );
}
