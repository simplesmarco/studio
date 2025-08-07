"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateDynamicFaq, type DynamicFaqInput } from '@/ai/flows/dynamic-faq';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const formSchema = z.object({
  question: z.string().min(10, { message: 'Por favor, detalhe mais a sua pergunta.' }),
});

export function DynamicFaq() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<DynamicFaqInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<DynamicFaqInput> = async (data) => {
    setIsLoading(true);
    setAnswer(null);
    setError(null);
    try {
      const result = await generateDynamicFaq(data);
      setAnswer(result.answer);
    } catch (e) {
      setError('Ocorreu um erro ao gerar a resposta. Por favor, tente novamente.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Ainda com dúvidas?</h3>
      <p className="text-center text-foreground/80 mb-6 max-w-2xl mx-auto">
        Use nossa assistente virtual para obter respostas instantâneas sobre nossos serviços.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl mx-auto">
        <Textarea
          {...register('question')}
          placeholder="Ex: Como funciona o atendimento domiciliar? Quais os valores?"
          className="min-h-[100px] text-base"
          disabled={isLoading}
        />
        {errors.question && <p className="text-sm text-destructive">{errors.question.message}</p>}
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
          Perguntar à IA
        </Button>
      </form>

      {isLoading && (
        <div className="text-center mt-6">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-foreground/80">Gerando resposta...</p>
        </div>
      )}

      {error && <p className="mt-6 text-center text-destructive">{error}</p>}

      {answer && (
        <Card className="mt-6 max-w-2xl mx-auto bg-primary/5 border-accent">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-2 text-primary">Resposta Gerada por IA:</h4>
            <p className="text-foreground/90 whitespace-pre-wrap">{answer}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
