"use client";

export default function Caracteristicas() {
  //
  // C. Transformação/processamento de Dados
  const caracteristicas = [
    "JSX, sintaxe que mistura HTML e JS.",
    "Componentes, funções que retornam JSX.",
    "Componentes Reutilizáveis e Modulares.",
    "Roteamento Automático e APIs.",
    "Hooks: useState, useEffect e useSWR.",
    "Renderização Rápida e SEO Friendly.",
    "TypeScript Seguro e Escalável.",
    "Comunidade Ativa e Popularidade.",
  ];

  //
  // E. Handlers (interação do utilizador)
  function handleClick(caracteristica: string) {
    alert(`Escolheste: ${caracteristica}`);
  }

  //
  // G. Renderização
  return (
    <div>
      <h2>Características do React e Next.js</h2>
      <p>Clica numa característica para a selecionar.</p>
      <ul>
        {caracteristicas.map((caracteristica, i) => {
          return (
            <li
              key={i}
              onClick={() => handleClick(caracteristica)}
              className="cursor-pointer hover:text-blue-700"
            >
              {caracteristica}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
