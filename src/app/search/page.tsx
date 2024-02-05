"use client";
import SearchPage from "../../components/atompage/Search/Search";
import React, { Suspense, useEffect, useState } from "react";

export default function Search() {
  return (
    <Suspense fallback={"Loading.."}>
      <SearchPage></SearchPage>
    </Suspense>
  );
}
