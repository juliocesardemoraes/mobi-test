"use client";
import ResultLoading from "@/components/molecules/ResultLoading/Resultloading";
import ResultPage from "../../components/atompage/Result/Result";

import React, { Suspense } from "react";

export default function Result() {
  return (
    <Suspense fallback={<ResultLoading></ResultLoading>}>
      <ResultPage></ResultPage>
    </Suspense>
  );
}
