"use client";

import { useState } from "react";

interface Tarefa {
  id: number;
  texto: string;
}

export default function ListaTarefas() {
  //
  // A. Gestão de Estados
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [idEmEdicao, setIdEmEdicao] = useState<number | null>(null);
  const [textoEditado, setTextoEditado] = useState("");

  //
  // E. Handlers (interação do utilizador)
  function inserir() {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa.trim() }]);
    setNovaTarefa("");
  }

  function apagar(id: number) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function editar(tarefa: Tarefa) {
    setIdEmEdicao(tarefa.id);
    setTextoEditado(tarefa.texto);
  }

  function guardar(id: number) {
    if (textoEditado.trim() === "") return;
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, texto: textoEditado.trim() } : tarefa,
      ),
    );
    setIdEmEdicao(null);
  }

  //
  // G. Renderização
  return (
    <div>
      <h3 className="font-bold">Lista de tarefas</h3>

      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && inserir()}
          placeholder="Nova tarefa"
          className="flex-1 rounded-lg border bg-white px-3 py-2"
        />
        <button
          onClick={inserir}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Inserir
        </button>
      </div>

      <ul>
        {tarefas.map((tarefa) => {
          return (
            <li key={tarefa.id}>
              {idEmEdicao === tarefa.id ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    className="flex-1 rounded-lg border bg-white px-2 py-1"
                  />
                  <button
                    onClick={() => guardar(tarefa.id)}
                    className="rounded-lg bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setIdEmEdicao(null)}
                    className="rounded-lg bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="flex-1">{tarefa.texto}</span>
                  <button
                    onClick={() => editar(tarefa)}
                    className="rounded-lg bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => apagar(tarefa.id)}
                    className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    Apagar
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
