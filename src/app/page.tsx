import { Navbar, FooterFragment } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>

      <main>Home</main>

      <footer>
        <FooterFragment />
      </footer>
    </div>
  );
}
