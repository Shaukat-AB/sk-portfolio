import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FooterFragment, Navbar, ThemeProvider } from '@/components';

const interSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'This project showcases my work and skills as developer built using Next.js and Tailwind CSS for responsive layout.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen py-4 relative overflow-y-hidden">
            <div className="w-full h-24" />

            <header className="absolute px-12 bottom-12 md:top-4 w-full flex md:justify-center items-start h-24">
              <Navbar />
            </header>

            <main className="px-4 max-w-3xl mx-auto flex flex-col gap-10">
              {children}
            </main>

            <footer className="max-w-3xl mx-auto">
              <FooterFragment />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
