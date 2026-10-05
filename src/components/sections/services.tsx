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
    <section id="servicos" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Serviços
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    {service.title}
                  </CardTitle>
                  <Badge variant="secondary">R$ {service.price.toFixed(2)}/h</Badge>
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