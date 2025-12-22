import { Button } from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

const Hero = () => {
  return (
    <section className="max-w-md md:max-w-3xl mx-auto px-4 md:pt-10 flex flex-col items-center gap-4 text-center">
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
