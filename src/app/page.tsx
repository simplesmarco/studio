import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Problems } from '@/components/landing/Problems';
import { Specialties } from '@/components/landing/Specialties';
import { About } from '@/components/landing/About';
import { ServiceModalities } from '@/components/landing/ServiceModalities';
import { Process } from '@/components/landing/Process';
import { Results } from '@/components/landing/Results';
import { Testimonials } from '@/components/landing/Testimonials';
import { Faq } from '@/components/landing/Faq';
import { Location } from '@/components/landing/Location';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problems />
        <Specialties />
        <About />
        <ServiceModalities />
        <Process />
        <Results />
        <Testimonials />
        <Faq />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
