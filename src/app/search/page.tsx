"use client";
import React, { Suspense, useEffect, useState } from "react";
import SearchPage from "@/components/Pages/Search/Search";

export default function Search() {
  return (
    <Suspense fallback={"Loading.."}>
      <SearchPage></SearchPage>
    </Suspense>
  );
}
