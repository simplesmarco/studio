"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-8 ml-4">
            <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">Dr. Lucas Ribeiro</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
                {link.label}
                </Link>
            ))}
            </nav>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-auto">
            <a href="tel:1134567890" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground">
                <Phone size={16} /> (11) 3456-7890
            </a>
            <a href="https://wa.me/5511987653214" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground">
                <MessageCircle size={16} /> (11) 9 8765-3214
            </a>
            <Button asChild>
                <Link href="#agendar">AGENDAR CONSULTA</Link>
            </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
              <Link href="/" className="mb-4" onClick={() => setIsOpen(false)}>
                <span className="font-bold text-lg text-primary">Dr. Lucas Ribeiro</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t pt-6 mt-4 flex flex-col gap-4">
                <a href="tel:1134567890" className="flex items-center gap-2 text-sm font-medium">
                    <Phone size={16} /> (11) 3456-7890
                </a>
                <a href="https://wa.me/5511987653214" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium">
                    <MessageCircle size={16} /> (11) 9 8765-3214
                </a>
                <Button asChild className="w-full mt-2">
                    <Link href="#agendar" onClick={() => setIsOpen(false)}>AGENDAR CONSULTA</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
