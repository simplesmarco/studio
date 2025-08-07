import { CheckCircle2 } from 'lucide-react';

const results = [
  { text: 'Alívio da dor em poucas sessões' },
  { text: 'Recuperação da mobilidade e flexibilidade' },
  { text: 'Melhora da qualidade de vida no dia a dia' },
  { text: 'Retorno às atividades que você ama' },
  { text: 'Prevenção de futuras lesões' },
  { text: 'Bem-estar físico e mental renovado' },
];

export function Results() {
  return (
    <section id="resultados" className="w-full py-20 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              Resultados Que Você Pode Esperar
            </h2>
            <ul className="grid gap-4 text-foreground/90 mt-6">
              {results.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-lg border">
            <p className="text-xl italic text-foreground/80">
              "Imagine acordar sem dor, se movimentar livremente e voltar a fazer tudo que você gosta. Esse é o resultado que nossos pacientes conquistam."
            </p>
            <p className="mt-4 text-lg font-semibold text-primary">- Dr. Lucas Ribeiro</p>
          </div>
        </div>
      </div>
    </section>
  );
}
