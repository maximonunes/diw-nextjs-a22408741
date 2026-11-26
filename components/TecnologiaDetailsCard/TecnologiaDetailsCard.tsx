import Image from "next/image";
import ContadorPersonalizado from "@/components/contadorPersonalizado/contadorPersonalizado";

interface TecnologiaDetailsCardProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaDetailsCard({
  title,
  image,
  description,
  rating,
}: TecnologiaDetailsCardProps) {
  //
  // G. Renderização
  return (
    <article className="flex flex-col items-center gap-3 rounded-xl bg-white p-6 shadow">
      <Image
        src={`/tecnologias/${image}`}
        alt={`Logotipo de ${title}`}
        width={120}
        height={120}
      />
      <h2>{title}</h2>
      <p className="text-center">{description}</p>
      <p className="text-yellow-500" aria-label={`Rating ${rating} de 5`}>
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </p>
      <ContadorPersonalizado title={title} />
    </article>
  );
}
