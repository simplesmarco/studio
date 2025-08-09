import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const differentiators = [
  '10 anos de experiência clínica',
  'Especialização em 4 técnicas avançadas',
  'Abordagem personalizada para cada paciente',
  'Comprometimento com resultados duradouros',
  'Atendimento humanizado e acolhedor',
];

export function About() {
  return (
    <section id="sobre" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              Conheça o Dr. Lucas Ribeiro
            </h2>
            <div className="text-foreground/80 space-y-4 text-lg">
              <p>
                Com 10 anos dedicados à fisioterapia, o Dr. Lucas Ribeiro se especializou nas técnicas mais avançadas e eficazes para tratamento da dor e reabilitação funcional.
              </p>
              <p className="font-semibold text-foreground">
                Sua missão é simples: Devolver qualidade de vida aos seus pacientes através de tratamentos personalizados e baseados em evidências científicas.
              </p>
            </div>
            <ul className="grid gap-3 text-foreground/90 mt-6">
              {differentiators.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <Image
              src="/images/doctor-profile.jpeg"
              alt="Foto do Dr. Lucas Ribeiro"
              width={500}
              height={550}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
