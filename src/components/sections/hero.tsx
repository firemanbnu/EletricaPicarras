import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
      <div className="container relative flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-2">
          <Zap className="h-10 w-10 text-amber-600 dark:text-amber-400" />
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Elétrica Picarras
          </h1>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
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