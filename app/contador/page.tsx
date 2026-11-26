"use client";

import dynamic from "next/dynamic";

// o Contador usa localStorage, que só existe no browser
const Contador = dynamic(() => import("@/components/Contador/Contador"), {
  ssr: false,
});

export default function ContadorPage() {
  //
  // G. Renderização
  return (
    <div>
      <h2>Contador</h2>
      <p>Contador entre 0 e 10, guardado no localStorage.</p>
      <Contador />
    </div>
  );
}
