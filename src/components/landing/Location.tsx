import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export function Location() {
  const address = "R. Comendador Ângelo Rinaldi, 164 - Sala 21, Parque Santos Dumont, Taboão da Serra - SP, CEP: 06754-070";
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;


  return (
    <section id="localizacao" className="w-full py-20 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              Como Chegar
            </h2>
            <div className="space-y-2 text-lg text-foreground/80">
              <p className="flex items-start gap-3"><MapPin className="w-6 h-6 mt-1 text-accent flex-shrink-0" /> <strong>Endereço completo:</strong></p>
              <address className="pl-9 not-italic">
                R. Comendador Ângelo Rinaldi, 164 - Sala 21<br />
                Parque Santos Dumont, Taboão da Serra - SP<br />
                CEP: 06754-070
              </address>
            </div>
            <Button size="lg" asChild>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Ver Localização no Mapa
              </a>
            </Button>
          </div>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border">
            <iframe
                className="w-full h-full"
                src={googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Localização do Consultório"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}