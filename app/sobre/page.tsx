import Image from "next/image";

export default function Sobre() {
  //
  // G. Renderização
  return (
    <>
      <h2>Desenvolvimento Web Moderno</h2>
      <ul>
        <li>React e Next.js revolucionaram a criação de interfaces web.</li>
        <li>São usados por empresas como Facebook, Netflix e Airbnb.</li>
        <li>Dominar estas tecnologias abre muitas oportunidades!</li>
      </ul>

      <h2 className="mt-6">Sobre React e Next</h2>
      <Image
        src="/tecnologias/react.svg"
        alt="Logotipo do React"
        width={200}
        height={200}
        className="mt-4"
      />
    </>
  );
}
