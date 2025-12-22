import { Navbar, FooterFragment, Button } from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen py-4 relative overflow-y-hidden">
      <div className="w-full h-24" />

      <header className="absolute px-12 bottom-12 md:top-4 w-full flex md:justify-center items-start h-24">
        <Navbar />
      </header>

      <main className="px-4 max-w-3xl mx-auto flex flex-col gap-10">
        <Hero />
      </main>

      <footer className="max-w-3xl mx-auto">
        <FooterFragment />
      </footer>
    </div>
  );
}

const Hero = () => {
  return (
    <section className="max-w-md md:max-w-3xl mx-auto px-4 pt-4 flex flex-col items-center gap-4 text-center">
      <h1 className="hero-title">Where visions are tailored into reality</h1>

      <div className="px-2 space-y-8">
        <p className="hero-text">
          I am Shaukat, a full stack engineer specializing in creating full
          stack solutions that not only function but also inspire
        </p>
        <Button asChild className="mb-8">
          <Link href="/projects">Shaukat | Featured Projects</Link>
        </Button>
      </div>
    </section>
  );
};
