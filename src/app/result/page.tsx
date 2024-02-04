"use client";
import ResultPage from "@/components/pages/Result/Result";
import ResultLoading from "@/components/molecules/ResultLoading/Resultloading";
import React, { Suspense } from "react";

export default function Result() {
  return (
    <Suspense fallback={<ResultLoading></ResultLoading>}>
      <ResultPage></ResultPage>
    </Suspense>
  );
}

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   // Pass post data to the page via props
//   return { props: { post } }
// }
