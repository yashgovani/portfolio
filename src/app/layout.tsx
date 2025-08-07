import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Developer - Modern Web Solutions',
  description:
    'Creative frontend developer specializing in React, Next.js, and modern web technologies. Building beautiful, interactive user experiences with cutting-edge design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
                document.body.classList.add(theme);
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                // Fallback to light theme if something goes wrong
                document.documentElement.classList.add('light');
                document.body.classList.add('light');
                document.documentElement.setAttribute('data-theme', 'light');
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased h-full bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
