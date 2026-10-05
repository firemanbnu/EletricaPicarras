import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/types/services";
import { Zap, Wrench, Lightbulb, Plug, Shield } from "lucide-react";

const iconMap = {
  zap: Zap,
  wrench: Wrench,
  lightbulb: Lightbulb,
  plug: Plug,
  shield: Shield,
};

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções elétricas completas para sua casa ou comércio
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <Icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    {service.title}
                  </CardTitle>
                  <Badge variant="secondary" className="font-medium">R$ {service.price.toFixed(2)}/h</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}