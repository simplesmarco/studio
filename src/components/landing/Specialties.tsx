import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const specialties = [
  {
    title: 'QUIROPRAXIA',
    description: 'Técnica manual para alinhamento da coluna vertebral.',
    indications: 'Dores nas costas, hérnias, ciática, dores no pescoço.',
    benefits: 'Alívio imediato da dor, melhora da postura, aumento da mobilidade.',
    image: 'https://images.unsplash.com/photo-1699523229487-bddb965a3307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxxdWlyb3ByYXhpYXxlbnwwfHx8fDE3NTQ3ODc2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'chiropractic adjustment'
  },
  {
    title: 'LIBERAÇÃO MIOFASCIAL',
    description: 'Técnica para liberar tensões nos músculos e fáscias.',
    indications: 'Tensões musculares, dor crônica, limitação de movimento.',
    benefits: 'Relaxamento muscular, melhora da flexibilidade, redução da dor.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXNzYWdlfGVufDB8fHx8fDE3NTQ3ODc5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'myofascial release'
  },
  {
    title: 'DRY NEEDLING',
    description: 'Técnica com agulhas para desativar pontos-gatilho.',
    indications: 'Dores musculares específicas, tensões localizadas.',
    benefits: 'Alívio rápido da dor, relaxamento muscular profundo.',
    image: 'https://placehold.co/600x400.png',
    hint: 'dry needling'
  },
  {
    title: 'ORTOPEDIA',
    description: 'Tratamento de lesões e disfunções do sistema músculo-esquelético.',
    indications: 'Lesões esportivas, reabilitação, problemas articulares.',
    benefits: 'Recuperação funcional, prevenção de lesões, fortalecimento.',
    image: 'https://placehold.co/600x400.png',
    hint: 'orthopedic therapy'
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="w-full py-20 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Tratamentos Especializados Que Transformam Vidas
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {specialties.map((spec, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
                src={spec.image}
                alt={`Imagem sobre ${spec.title}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={spec.hint}
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-accent font-headline">{spec.title}</CardTitle>
                <CardDescription className="pt-2 text-md text-foreground/90">{spec.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Indicações:</h4>
                  <p className="text-foreground/80">{spec.indications}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Benefícios:</h4>
                  <p className="text-foreground/80">{spec.benefits}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
