import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Home, MapPin, Clock, ParkingCircle } from 'lucide-react';
import Link from 'next/link';

export function ServiceModalities() {
  return (
    <section id="atendimento" className="w-full py-20 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Atendimento Onde Você Precisar
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <Building2 className="w-10 h-10 text-accent" />
              <CardTitle className="text-2xl font-bold font-headline">CONSULTÓRIO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 flex-grow">
              <p className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" /> <span><strong>Endereço:</strong> R. Comendador Ângelo Rinaldi, 164 - Sala 21, Parque Santos Dumont, Taboão da Serra - SP, CEP: 06754-070</span></p>
              <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> <span><strong>Horários:</strong> Seg a Sex: 08:00-18:00 | Sáb: 08:00-12:00</span></p>
              <p className="flex items-center gap-3"><ParkingCircle className="w-5 h-5 text-primary" /> <span>Estacionamento disponível na região</span></p>
              <p className="font-semibold text-foreground">Ambiente moderno e equipado para seu conforto.</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <Home className="w-10 h-10 text-accent" />
              <CardTitle className="text-2xl font-bold font-headline">ATENDIMENTO DOMICILIAR</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80 flex-grow pt-4">
                <p><strong>Comodidade:</strong> Tratamento no conforto da sua casa</p>
                <p><strong>Flexibilidade:</strong> Horários adaptados à sua rotina</p>
                <p><strong>Indicado para:</strong> Pacientes com dificuldade de locomoção</p>
                <p><strong>Personalizado:</strong> Atenção exclusiva e individualizada</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#agendar">ESCOLHER MODALIDADE DE ATENDIMENTO</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
