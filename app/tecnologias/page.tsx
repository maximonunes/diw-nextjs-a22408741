import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";

interface Tecnologia {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function Tecnologias() {
  //
  // C. Transformação/processamento de Dados
  const lista: Tecnologia[] = JSON.parse(JSON.stringify(tecnologias));

  //
  // G. Renderização
  return (
    <div>
      <h2>Tecnologias Exploradas</h2>
      <p>Clica numa tecnologia para veres os detalhes.</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {lista.map((tecnologia, i) => {
          return (
            <TecnologiaCard
              key={i}
              id={i}
              title={tecnologia.title}
              image={tecnologia.image}
            />
          );
        })}
      </div>
    </div>
  );
}
