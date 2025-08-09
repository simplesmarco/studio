import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="inicio" className="w-full py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary font-headline">
              Livre-se da Dor e Recupere sua Qualidade de Vida
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              Dr. Lucas Ribeiro - 10 anos transformando vidas através de tratamentos especializados em Quiropraxia, Liberação Miofascial, Dry Needling e Ortopedia.
            </p>
            <ul className="grid gap-2 text-foreground/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>10 anos de experiência comprovada</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>4 especialidades avançadas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Atendimento no consultório e domiciliar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Resultados eficazes e duradouros</span>
              </li>
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#agendar">AGENDAR AVALIAÇÃO GRATUITA</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#especialidades">CONHECER ESPECIALIDADES</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <Image
              src="/images/hero-image.jpeg"
              alt="Dr. Lucas Ribeiro atendendo um paciente"
              width={450}
              height={450} 
              className="rounded-full object-cover shadow-2xl"
              data-ai-hint="physiotherapist patient"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
