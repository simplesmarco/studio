import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const specialties = [
  {
    title: 'QUIROPRAXIA',
    description: 'Técnica manual para alinhamento da coluna vertebral.',
    indications: 'Dores nas costas, hérnias, ciática, dores no pescoço.',
    benefits: 'Alívio imediato da dor, melhora da postura, aumento da mobilidade.',
  },
  {
    title: 'LIBERAÇÃO MIOFASCIAL',
    description: 'Técnica para liberar tensões nos músculos e fáscias.',
    indications: 'Tensões musculares, dor crônica, limitação de movimento.',
    benefits: 'Relaxamento muscular, melhora da flexibilidade, redução da dor.',
  },
  {
    title: 'DRY NEEDLING',
    description: 'Técnica com agulhas para desativar pontos-gatilho.',
    indications: 'Dores musculares específicas, tensões localizadas.',
    benefits: 'Alívio rápido da dor, relaxamento muscular profundo.',
  },
  {
    title: 'ORTOPEDIA',
    description: 'Tratamento de lesões e disfunções do sistema músculo-esquelético.',
    indications: 'Lesões esportivas, reabilitação, problemas articulares.',
    benefits: 'Recuperação funcional, prevenção de lesões, fortalecimento.',
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
            <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
