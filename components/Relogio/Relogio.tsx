"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function Relogio() {
  //
  // A. Gestão de Estados
  const [hora, setHora] = useState(() => new Date());

  //
  // F. Efeitos
  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(intervalo);
  }, []);

  //
  // G. Renderização
  return <span>{hora.toLocaleTimeString("pt-PT")}</span>;
}

// as horas dependem do browser, por isso o Relógio só é renderizado no cliente
export default dynamic(() => Promise.resolve(Relogio), { ssr: false });
