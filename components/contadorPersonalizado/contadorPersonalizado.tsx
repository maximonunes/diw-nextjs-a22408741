"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

interface ContadorPersonalizadoProps {
  title: string;
}

function ContadorPersonalizado({ title }: ContadorPersonalizadoProps) {
  //
  // C. Transformação/processamento de Dados
  const chave = `likes-${title}`;

  //
  // A. Gestão de Estados
  const [likes, setLikes] = useState<number>(() =>
    JSON.parse(localStorage.getItem(chave) ?? "0"),
  );

  //
  // E. Handlers (interação do utilizador)
  function darLike() {
    const novosLikes = likes + 1;
    setLikes(novosLikes);
    localStorage.setItem(chave, JSON.stringify(novosLikes));
  }

  //
  // G. Renderização
  return (
    <button
      onClick={darLike}
      className="rounded-lg bg-pink-500 px-3 py-1 text-white hover:bg-pink-600"
    >
      ❤️ {likes} {likes === 1 ? "like" : "likes"}
    </button>
  );
}

// o localStorage só existe no browser, por isso o contador só é renderizado no cliente
export default dynamic(() => Promise.resolve(ContadorPersonalizado), {
  ssr: false,
});
