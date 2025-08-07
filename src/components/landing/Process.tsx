const processSteps = [
  {
    step: 1,
    title: 'AVALIAÇÃO COMPLETA',
    description: 'Análise detalhada do seu caso, histórico e necessidades específicas.',
  },
  {
    step: 2,
    title: 'PLANO PERSONALIZADO',
    description: 'Desenvolvimento de estratégia de tratamento única para você.',
  },
  {
    step: 3,
    title: 'TRATAMENTO ESPECIALIZADO',
    description: 'Aplicação das técnicas mais adequadas ao seu caso.',
  },
  {
    step: 4,
    title: 'ACOMPANHAMENTO',
    description: 'Monitoramento da evolução e ajustes necessários.',
  },
];

export function Process() {
  return (
    <section id="processo" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Como Funciona o Seu Tratamento
          </h2>
        </div>
        <div className="relative">
          <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden lg:block" aria-hidden="true"></div>
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="relative text-center space-y-3">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg border-4 border-background">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground pt-2">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
