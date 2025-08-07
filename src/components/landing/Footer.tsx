import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary/95 text-primary-foreground/80">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary-foreground">Dr. Lucas Ribeiro</h3>
            <p>Fisioterapia Especializada</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-foreground transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary-foreground transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-primary-foreground mb-2">Endereço</h4>
            <address className="not-italic">
              R. Comendador Ângelo Rinaldi, 164 - Sala 21<br />
              Parque Santos Dumont, Taboão da Serra - SP<br />
              CEP: 06754-070
            </address>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-primary-foreground mb-2">Contato</h4>
            <p>Telefone: (11) 3456-7890</p>
            <p>WhatsApp: (11) 9 8765-4321</p>
            <p>E-mail: contato@drlucasribeiro.com.br</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-primary-foreground mb-2">Horários</h4>
            <p>Segunda a Sexta: 08:00 às 18:00</p>
            <p>Sábado: 08:00 às 12:00</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Lucas Ribeiro. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-2">
            <Link href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</Link>
            <span className="mx-1">|</span>
            <Link href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
