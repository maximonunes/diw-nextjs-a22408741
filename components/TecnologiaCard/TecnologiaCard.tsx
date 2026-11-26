import Image from "next/image";
import Link from "next/link";
import ContadorPersonalizado from "@/components/contadorPersonalizado/contadorPersonalizado";

interface TecnologiaCardProps {
  id: number;
  title: string;
  image: string;
}

export default function TecnologiaCard({
  id,
  title,
  image,
}: TecnologiaCardProps) {
  //
  // G. Renderização
  return (
    <article className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow">
      <Link
        href={`/tecnologias/${id}`}
        className="flex flex-col items-center gap-2"
      >
        <Image
          src={`/tecnologias/${image}`}
          alt={`Logotipo de ${title}`}
          width={60}
          height={60}
        />
        <h3 className="font-bold hover:underline">{title}</h3>
      </Link>
      <ContadorPersonalizado title={title} />
    </article>
  );
}
