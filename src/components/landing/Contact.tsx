"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card } from '../ui/card';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Nome completo é obrigatório.' }),
  whatsapp: z.string().min(10, { message: 'Número de WhatsApp inválido.' }),
  specialty: z.string().optional(),
  preference: z.enum(['consultorio', 'domiciliar'], { required_error: 'Selecione uma preferência.' }),
  bestTime: z.string().min(2, { message: 'Informe o melhor horário para entrarmos em contato.' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      whatsapp: '',
      specialty: '',
      bestTime: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Agradecemos seu contato. Entraremos em contato com você em breve!",
      variant: 'default',
    });
    form.reset();
  }

  return (
    <section id="contato" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div id="agendar" className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Agende Sua Consulta Hoje Mesmo
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/80 md:text-lg">
            Não deixe a dor limitar mais um dia da sua vida. Dê o primeiro passo para sua recuperação agendando sua avaliação.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem><FormLabel>Nome Completo</FormLabel><FormControl><Input placeholder="Seu nome" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="whatsapp" render={({ field }) => (
                    <FormItem><FormLabel>WhatsApp</FormLabel><FormControl><Input type="tel" placeholder="(11) 9...." {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="specialty" render={({ field }) => (
                    <FormItem><FormLabel>Especialidade de Interesse (Opcional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Selecione uma especialidade" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="quiropraxia">Quiropraxia</SelectItem>
                          <SelectItem value="liberacao_miofascial">Liberação Miofascial</SelectItem>
                          <SelectItem value="dry_needling">Dry Needling</SelectItem>
                          <SelectItem value="ortopedia">Ortopedia</SelectItem>
                          <SelectItem value="nao_sei">Não sei / Avaliação</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                )}/>
                 <FormField control={form.control} name="preference" render={({ field }) => (
                    <FormItem><FormLabel>Preferência de Atendimento</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Escolha a modalidade" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="consultorio">Consultório</SelectItem>
                          <SelectItem value="domiciliar">Domiciliar</SelectItem>
                        </SelectContent>
                      </Select><FormMessage />
                    </FormItem>
                )}/>
                <FormField control={form.control} name="bestTime" render={({ field }) => (
                    <FormItem><FormLabel>Melhor horário para contato</FormLabel><FormControl><Input placeholder="Ex: Manhã, após as 18h" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <Button type="submit" size="lg" className="w-full">QUERO AGENDAR MINHA CONSULTA</Button>
              </form>
            </Form>
          </Card>
          <div className="space-y-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground">Outras Formas de Contato</h3>
            <a href="https://wa.me/5511987653214" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-foreground/80 hover:text-primary transition-colors">
              <MessageCircle className="w-8 h-8 text-accent" />
              <div><p className="font-semibold">WhatsApp</p><p>(11) 9 8765-3214</p></div>
            </a>
            <a href="tel:1134567890" className="flex items-center gap-4 text-lg text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-8 h-8 text-accent" />
              <div><p className="font-semibold">Telefone</p><p>(11) 3456-7890</p></div>
            </a>
            <a href="mailto:contato@drlucasribeiro.com.br" className="flex items-center gap-4 text-lg text-foreground/80 hover:text-primary transition-colors">
              <Mail className="w-8 h-8 text-accent" />
              <div><p className="font-semibold">E-mail</p><p>contato@drlucasribeiro.com.br</p></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
