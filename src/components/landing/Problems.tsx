import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

const problems = [
  "Dores nas costas e coluna vertebral",
  "Tensões musculares e contraturas",
  "Lesões esportivas e recuperação",
  "Dores crônicas e limitações de movimento",
  "Problemas posturais do trabalho",
  "Reabilitação pós-cirúrgica",
];

export function Problems() {
  return (
    <section id="problemas" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Você Está Sofrendo Com...</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <HeartPulse className="w-8 h-8 text-accent flex-shrink-0" />
                <CardTitle className="text-lg font-semibold text-foreground">{problem}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-foreground/80">
            Sabemos como é frustrante conviver com a dor todos os dias. Ela limita seus movimentos, afeta seu trabalho, seus relacionamentos e sua alegria de viver. Mas você não precisa aceitar isso como normal.
          </p>
        </div>
      </div>
    </section>
  );
}
