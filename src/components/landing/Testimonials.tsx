import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'André Zaki',
    result: 'Lucas é ótimo! Profissional de conduta ilibada! Recomendadíssimo.',
    avatar: 'AZ',
    image: 'https://placehold.co/100x100.png',
    hint: 'happy man'
  },
  {
    name: 'Alessandra Santos Xavier',
    result: 'Lucas é um exemplo de profissional que cuida do paciente com zelo, cuidado e atenção a todo momento. Confiamos de olhos fechados em seu trabalho ♥️',
    avatar: 'AX',
    image: 'https://placehold.co/100x100.png',
    hint: 'smiling woman'
  },
  {
    name: 'Danyelle Chemiscok',
    result: 'Excelente profissional. Visível a dedicação e domínio na profissão. Além de ser um ótimo profissional, trata seus pacientes com muita empatia e respeito. Isso faz toda a diferença.',
    avatar: 'DC',
    image: 'https://placehold.co/100x100.png',
    hint: 'relaxed person'
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            O Que Nossos Pacientes Dizem
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-foreground/80 italic">"{testimonial.result}"</p>
              </CardContent>
              <div className="p-6 bg-primary/5 flex items-center gap-4 border-t">
                <Avatar className="w-12 h-12">
                  <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} data-ai-hint={testimonial.hint} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
