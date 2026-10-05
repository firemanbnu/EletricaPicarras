import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold">
            Elétrica Picarras
          </h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Instalações, reparos e projetos elétricos com segurança, agilidade e
          preço justo. Atendemos residências e pequenos comércios.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button size="lg" asChild>
            <Link href="/orcamento">Solicitar orçamento</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#servicos">Ver serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}