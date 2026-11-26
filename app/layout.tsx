import type { Metadata } from "next";
import Link from "next/link";
import Relogio from "@/components/Relogio/Relogio";
import "./globals.css";

export const metadata: Metadata = {
  title: "React & Next.js",
  description: "Lab 9 de DIW - app em React e Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  //
  // C. Transformação/processamento de Dados
  const data = new Date();

  //
  // G. Renderização
  return (
    <html lang="pt">
      <body className="flex min-h-screen flex-col items-center justify-start gap-4 p-20">
        <header className="flex flex-col items-center">
          <h1>React & Next.js</h1>
          <nav className="flex gap-4">
            <Link href="/" className="hover:underline">
              Intro
            </Link>
            <Link href="/sobre" className="hover:underline">
              Sobre
            </Link>
            <Link href="/caracteristicas" className="hover:underline">
              Características
            </Link>
            <Link href="/tecnologias" className="hover:underline">
              Tecnologias
            </Link>
            <Link href="/contador" className="hover:underline">
              Contador
            </Link>
            <Link href="/input" className="hover:underline">
              Input
            </Link>
          </nav>
        </header>

        <main className="min-h-[70vh] max-w-2xl rounded-2xl bg-blue-200 p-5 text-gray-900">
          {children}
        </main>

        <footer className="flex gap-4">
          <span>DIW {data.getFullYear()}</span>
          <Relogio />
        </footer>
      </body>
    </html>
  );
}
