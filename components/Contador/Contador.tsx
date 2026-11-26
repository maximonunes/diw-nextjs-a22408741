"use client";

import { useState } from "react";

//
// D. Funções utilitárias
function lerDoLocalStorage<T>(chave: string, valorInicial: T): T {
  if (typeof window === "undefined") return valorInicial;
  const guardado = localStorage.getItem(chave);
  return guardado ? JSON.parse(guardado) : valorInicial;
}

function getCor(numero: number) {
  if (numero <= 3) return "text-red-600";
  if (numero <= 7) return "text-yellow-500";
  return "text-green-600";
}

export default function Contador() {
  //
  // A. Gestão de Estados
  const [valor, setValor] = useState<number>(() =>
    lerDoLocalStorage("valor", 0),
  );
  const [historico, setHistorico] = useState<number[]>(() =>
    lerDoLocalStorage("historico", []),
  );

  //
  // C. Transformação/processamento de Dados
  const MIN = 0;
  const MAX = 10;

  //
  // D. Funções utilitárias
  function atualizar(novoValor: number) {
    if (novoValor < MIN || novoValor > MAX) return;

    const novoHistorico = [...historico, novoValor];

    setValor(novoValor);
    setHistorico(novoHistorico);

    localStorage.setItem("valor", JSON.stringify(novoValor));
    localStorage.setItem("historico", JSON.stringify(novoHistorico));
  }

  //
  // E. Handlers (interação do utilizador)
  function incrementar() {
    atualizar(valor + 1);
  }

  function decrementar() {
    atualizar(valor - 1);
  }

  function reset() {
    atualizar(0);
  }

  //
  // G. Renderização
  return (
    <div className="flex flex-col items-center gap-4">
      <p className={`text-6xl font-bold ${getCor(valor)}`}>{valor}</p>

      <div className="flex gap-2">
        <button
          onClick={decrementar}
          disabled={valor === MIN}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-40"
        >
          -1
        </button>
        <button
          onClick={reset}
          className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={incrementar}
          disabled={valor === MAX}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-40"
        >
          +1
        </button>
      </div>

      <div className="w-full">
        <h3 className="font-bold">Histórico</h3>
        <ul>
          {historico.map((numero, i) => {
            return (
              <li key={i} className={getCor(numero)}>
                {numero}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
