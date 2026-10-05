import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Elétrica Picarras
        </Link>
        <nav className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href="/#servicos">Serviços</Link>
          </Button>
          <Button asChild>
            <Link href="/orcamento">Pedir orçamento</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}