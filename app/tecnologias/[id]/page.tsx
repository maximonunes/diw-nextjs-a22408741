import Link from "next/link";
import { notFound } from "next/navigation";
import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaDetailsCard from "@/components/TecnologiaDetailsCard/TecnologiaDetailsCard";

// gera uma página estática para cada tecnologia
export function generateStaticParams() {
  return tecnologias.map((_, i) => ({ id: String(i) }));
}

export default async function TecnologiaPage({
  params,
}: PageProps<"/tecnologias/[id]">) {
  //
  // B. Fetch de Dados
  const { id } = await params;
  const tecnologia = tecnologias[Number(id)];

  if (!tecnologia) notFound();

  //
  // G. Renderização
  return (
    <div className="flex flex-col gap-4">
      <TecnologiaDetailsCard
        title={tecnologia.title}
        image={tecnologia.image}
        description={tecnologia.description}
        rating={tecnologia.rating}
      />
      <Link href="/tecnologias" className="hover:underline">
        ← Voltar às tecnologias
      </Link>
    </div>
  );
}
