"use client";

import { useState } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/types/services";
import { CheckCircle } from "lucide-react";

export default function OrcamentoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceId: "",
    description: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="py-16 container max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto text-green-600" />
              <CardTitle className="text-2xl mt-4">Pedido enviado!</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p className="mb-6">
                Obrigado {formData.name}! Em breve entraremos em contato pelo
                telefone/email informado para confirmar o orçamento.
              </p>
              <Button onClick={() => setSubmitted(false)}>
                Fazer novo pedido
              </Button>
            </CardContent>
          </Card>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16">
        <div className="container max-w-2xl">
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl">Solicitar orçamento</CardTitle>
              <p className="text-muted-foreground">Preencha os dados e entraremos em contato</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp/Telefone</Label>
                    <Input
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Serviço</Label>
                  <Select
                    value={formData.serviceId}
                    onValueChange={(value: string | null) =>
                      setFormData({ ...formData, serviceId: value || "" })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title} - R$ {service.price.toFixed(2)}/h
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descreva o serviço desejado</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    placeholder="Ex.: trocar disjuntor, instalar 3 tomadas..."
                    value={formData.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar pedido
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}