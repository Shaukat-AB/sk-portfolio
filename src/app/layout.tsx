import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FooterFragment, GlassBg } from '@/components/server';
import { Navbar, ThemeProvider } from '@/components/client';

const interSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Shaukat - Portfolio',
    template: '%s | Shaukat - Portfolio',
  },
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
          <div className="min-h-screen relative overflow-y-hidden">
            <div className="bg-bg max-w-3xl mx-auto pt-4 w-full h-24"></div>

            <GlassBg variant="md" />

            <header className="fixed z-20 bottom-10 md:top-4 md:w-full flex md:justify-center items-start h-24">
              <Navbar />
            </header>

            <main className="bg-bg px-4 md:px-8 md:pt-10 max-w-3xl mx-auto flex flex-col gap-10">
              {children}
            </main>

            <footer className="bg-bg max-w-3xl p-8 md:p-10 min-h-20 pt-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <FooterFragment />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
