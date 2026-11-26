"use client";

import { useState } from "react";
import tecnologias from "@/app/data/tecnologias.json";
import ListaTarefas from "@/components/ListaTarefas/ListaTarefas";

export default function InputPage() {
  //
  // A. Gestão de Estados
  const [texto, setTexto] = useState("");
  const [tecnologia, setTecnologia] = useState("");

  //
  // G. Renderização
  return (
    <div className="flex flex-col gap-6">
      <h2>Input</h2>

      <div>
        <h3 className="font-bold">Texto</h3>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escreve alguma coisa"
          className="mt-2 w-full rounded-lg border bg-white px-3 py-2"
        />
        <p>Escreveste: {texto}</p>
      </div>

      <div>
        <h3 className="font-bold">Seletor de tecnologia</h3>
        <select
          value={tecnologia}
          onChange={(e) => setTecnologia(e.target.value)}
          className="mt-2 w-full rounded-lg border bg-white px-3 py-2"
        >
          <option value="">-- Escolhe uma tecnologia --</option>
          {tecnologias.map((tec) => {
            return (
              <option key={tec.title} value={tec.title}>
                {tec.title}
              </option>
            );
          })}
        </select>
        {tecnologia && <p>Escolheste: {tecnologia}</p>}
      </div>

      <ListaTarefas />
    </div>
  );
}
