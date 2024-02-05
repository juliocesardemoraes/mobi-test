import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-svw flex justify-center items-center gap-4">
      <Link href="/">
        <h1>MobiFipeChecker</h1>
      </Link>
      <Link href="/">
        <h4>Voltar para a página principal</h4>
      </Link>
    </nav>
  );
}
