import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'VitalFlow Physiotherapy | Dr. Lucas Ribeiro',
  description: 'Livre-se da dor e recupere sua qualidade de vida com tratamentos especializados em Quiropraxia, Liberação Miofascial, Dry Needling e Ortopedia.',
  keywords: 'fisioterapia, quiropraxia, liberação miofascial, dry needling, ortopedia, dor nas costas, taboão da serra, dr lucas ribeiro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
