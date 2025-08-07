import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicFaq } from './DynamicFaq';

const staticFaqs = [
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "Cada sessão de fisioterapia dura em média de 50 a 60 minutos, dependendo do plano de tratamento personalizado para cada paciente.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "O número de sessões varia de acordo com a condição do paciente, a gravidade da lesão e a resposta ao tratamento. Uma avaliação inicial detalhada nos permitirá estimar a quantidade de sessões necessárias.",
  },
  {
    question: "O tratamento é doloroso?",
    answer: "Algumas técnicas podem causar um leve desconforto momentâneo, que é um sinal de que a área correta está sendo tratada. No entanto, nosso objetivo é sempre o alívio da dor, e a intensidade do tratamento é ajustada para o conforto do paciente.",
  },
  {
    question: "Aceita convênio médico?",
    answer: "Atualmente, atendemos de forma particular para garantir um tratamento totalmente personalizado e sem as limitações impostas pelos convênios. Fornecemos recibo para que você possa solicitar o reembolso junto ao seu plano de saúde.",
  },
];


export function Faq() {
  return (
    <section id="faq" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Dúvidas Frequentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {staticFaqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <DynamicFaq />
      </div>
    </section>
  );
}
