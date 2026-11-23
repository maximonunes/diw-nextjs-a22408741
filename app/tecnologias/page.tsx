import Image from "next/image";
import tecnologias from "@/app/data/tecnologias.json";

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

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {lista.map((tecnologia, i) => {
          return (
            <article
              key={i}
              className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow"
            >
              <Image
                src={`/tecnologias/${tecnologia.image}`}
                alt={`Logotipo de ${tecnologia.title}`}
                width={60}
                height={60}
              />
              <h3 className="font-bold">{tecnologia.title}</h3>
              <p className="text-center text-sm">{tecnologia.description}</p>
              <p
                className="text-yellow-500"
                aria-label={`Rating ${tecnologia.rating} de 5`}
              >
                {"★".repeat(tecnologia.rating)}
                {"☆".repeat(5 - tecnologia.rating)}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
